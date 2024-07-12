from typing import List
from dataclasses import dataclass
import json
from fastapi import FastAPI, HTTPException

# Charger les articles depuis le fichier JSON
with open("article.json", "r") as f:
    article_list = json.load(f)

@dataclass
class Article:
    id: int
    name: str
    description: str
    type: str
    price: str

app = FastAPI()

# Initialiser les articles
articles = [Article(**article) for article in article_list]

@app.get("/articles", response_model=List[Article])
def get_articles():
    return articles

@app.get("/articles/{article_id}", response_model=Article)
def get_article(article_id: int):
    for article in articles:
        if article.id == article_id:
            return article
    raise HTTPException(status_code=404, detail="Article non trouvé")

@app.post("/articles", response_model=Article)
def create_article(article: Article):
    articles.append(article)
    return article

def save_articles_to_file():
    with open("article.json", "w") as f:
        json.dump([article.__dict__ for article in articles], f, indent=4)

@app.put("/articles/{article_id}", response_model=Article)
def update_article(article_id: int, updated_article: Article):
    for index, article in enumerate(articles):
        if article.id == article_id:
            articles[index] = updated_article
            return updated_article
    raise HTTPException(status_code=404, detail="Article non trouvé")

@app.delete("/articles/{article_id}")
def delete_article(article_id: int):
    for index, article in enumerate(articles):
        if article.id == article_id:
            del articles[index]
            return {"message": "Article supprimé"}
    raise HTTPException(status_code=404, detail="Article non trouvé")
