import requests
import cssutils
from bs4 import BeautifulSoup

URL = 'https://www.flickr.com/search/?text=fish'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
images = soup.find_all('div', class_='photo-list-photo-view')

# print(images)

for image in images:
    print(image)

    print(image.select(['background-image']))
    
    # style = cssutils.parseStyle(image)
    # url = style['background-image']
# results = soup.find(id='search-unified-content')
