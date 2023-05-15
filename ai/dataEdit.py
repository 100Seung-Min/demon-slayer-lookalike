import pandas as pd

def parse_name(name_str):
    name = name_str.replace("&quot;", "")
    name = name.replace("&#039", "")
    return name

anime = pd.read_csv('anime.csv', low_memory=False)
anime = anime[['anime_id', 'name', 'genre', 'type']]
anime['name'] = anime['name'].apply(parse_name)
#print(anime['genre'].head())
#anime.drop(anime[(anime['genre'].find('Hentai')) or (anime['genre'].find('Yaoi')) or (anime['genre'].find('Yuri'))].index, inplace=True)
cnt = 0
for i in anime['genre']:
    if type(i) != type(''): continue
    if not i.find('Hentai') and not i.find('Yaoi') and not i.find('Yuri'):
        anime.drop(cnt, inplace=True)
    cnt+=1
    
rating = pd.read_csv('rating.csv', low_memory=False)
rating = rating[rating.rating != -1]
rating.reset_index(drop=True, inplace=True)

anime.anime_id = pd.to_numeric(anime.anime_id, errors='coerce')
rating.anime_id = pd.to_numeric(rating.anime_id, errors='coerce')

data = pd.merge(rating, anime, on='anime_id', how='inner')

matrix = data.pivot_table(index='user_id', columns='name', values='rating')

anime.to_csv('anime.csv', index=False)
rating.to_csv('rating.csv', index=False)
matrix.to_csv('matrix.csv', index=False)