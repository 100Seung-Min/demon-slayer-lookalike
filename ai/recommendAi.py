import requests
from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import random

GENRE_WEIGHT = 0.1

def parse_genres(genres_str):
    if type(genres_str) != type(''): return []
    genres = genres_str.split(', ')

    genres_list = []
    for g in genres:
        genres_list.append(g)
    return genres_list

def parse_name(name_str):
    name = name_str.replace("&quot;", "")
    name = name.replace("&#039", "")
    return name

def pearsonR(s1, s2):
    s1_c = s1 - s1.mean()
    s2_c = s2 - s2.mean()
    if np.sqrt(np.sum(s1_c ** 2) * np.sum(s2_c ** 2)) == 0:
        return 0
    return np.sum(s1_c * s2_c) / np.sqrt(np.sum(s1_c ** 2) * np.sum(s2_c ** 2))

def FilterAnime(typeList) :
    filterAnimeList = []
    for type in typeList :
        filterAnimeList.append(anime[anime['type'] == type])
    return random.shuffle(filterAnimeList)

def getImageLink(tag) :
    url = f'https://www.google.com/search?q={tag}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi087S8m-f-AhXGslYBHUf-BlkQ_AUoAXoECAEQAw&biw=2560&bih=1321&dpr=1'
    response = requests.get(url)

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        image = soup.select('img')
        return [tag, image[1]['src']]
    else : 
        print(response.status_code)

def getAnimeList(typeList):
    global anime
    if(typeList is not None) :
        anime = FilterAnime(typeList)

def recommend(input_anime, matrix, n, similar_genre=True):
    if anime[anime['name'] == input_anime].size == 0: return []
    input_genres = anime[anime['name'] == input_anime]['genre'].iloc(0)[0]

    result = []
    for title in matrix.columns:
        if title == input_anime:
            continue

        cor = pearsonR(matrix[input_anime], matrix[title])

        if similar_genre and len(input_genres) > 0:
            temp_genres =  anime[anime['name'] == title]['genre'].iloc(0)[0]

            same_count = np.sum(np.isin(input_genres, temp_genres))
            cor += (GENRE_WEIGHT * same_count)

        if np.isnan(cor):
            continue
        else:
            result.append((title, '{:.2f}'.format(cor), temp_genres))
    
    result.sort(key=lambda r:r[1], reverse=True)
    return result[:n]

anime = pd.read_csv('anime.csv', low_memory=False)
anime = anime[['anime_id', 'name', 'genre', 'type']]
anime['name'] = anime['name'].apply(parse_name)
anime['genre'] = anime['genre'].apply(parse_genres)

rating = pd.read_csv('rating.csv', low_memory=False)
rating = rating[rating.rating != -1]
rating.reset_index(drop=True, inplace=True)

anime.anime_id = pd.to_numeric(anime.anime_id, errors='coerce')
rating.anime_id = pd.to_numeric(rating.anime_id, errors='coerce')

data = pd.merge(rating, anime, on='anime_id', how='inner')

matrix = data.pivot_table(index='user_id', columns='name', values='rating')

print(matrix)