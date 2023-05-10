import numpy as np
import pandas as pd

raw_data_anime = pd.read_csv("anime.csv")
raw_data_rating = pd.read_csv("rating.csv")

raw_data_anime["name"] = raw_data_anime.name.str.replace("&quot;","")
raw_data_anime["name"] = raw_data_anime.name.str.replace("&#039","")

data_user_rating = raw_data_rating[raw_data_rating.rating != -1]
data_user_rating.reset_index(drop=True, inplace=True)

rated_anime_id_list = data_user_rating["anime_id"].unique()

raw_data_anime = raw_data_anime[raw_data_anime["anime_id"].isin(rated_anime_id_list)]

type_list = raw_data_anime["type"].unique()[:-1]
tag_list = type_list

raw_data_anime[tag_list] = "-"

for t in type_list:
    raw_data_anime[t] =  np.where(raw_data_anime["type"] == t, "o", "-")

raw_data_anime = raw_data_anime.drop(columns=["type"])

genre_tag_dict = {}
genre_list = []

for s in raw_data_anime.genre.str.split(', '):
    if type(s) == type(0.1):
        continue
    
    for g in s:
        genre_tag_dict[g] = 0

for key, val in genre_tag_dict.items():
    genre_list.append(key)

tag_list = tag_list.tolist()
tag_list += genre_list

for s in raw_data_anime.genre.str.split(', '):
    if type(s) == type(0.1):
        continue
    for g in s:
        genre_tag_dict[g] = 0

for g in genre_list:
    raw_data_anime[g] = np.where(raw_data_anime.genre.str.find(g) != -1, "o", "-")

data_ani = raw_data_anime.drop(columns=["genre"])
data_ani = data_ani.set_index("anime_id")

data_merge = pd.merge(data_user_rating, data_ani["name"], on="anime_id")

rating_matrix = data_merge.pivot_table(values="rating", index="user_id", columns="name")

rating_matrix_fillna = rating_matrix.fillna(0)

for col, item in rating_matrix.items():
    rating_matrix[col] = item.fillna(0)

rating_matrix_numpy = rating_matrix.values.T
rating_matrix_numpy.shape

user_count, ani_count = rating_matrix_numpy.shape

from sklearn.decomposition import TruncatedSVD
SVD = TruncatedSVD(n_components=12)
matrix = SVD.fit_transform(rating_matrix_numpy)

corr = np.corrcoef(matrix)
ani_title_list = list(rating_matrix.columns)

selected_title = "사용자가 고른 장르"

idx = ani_title_list.index(selected_title)
similarity = corr[idx]

idx = 0
idx_dict = {}
for val in similarity:
    if val >= 0.9:
        idx_dict[val] = ani_title_list[idx]
    idx += 1

ani_names = []
limit = 10
idx = 0
for key, val in sorted(idx_dict.items(), reverse=True):
    if limit < idx:
        break
    if idx == 0:
        idx += 1 
        continue
    ani_names.append(val)
    idx += 1 

answer_table = data_ani[data_ani["name"].isin(ani_names)]   