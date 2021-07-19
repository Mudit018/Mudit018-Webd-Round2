import requests 
from urllib import parse
from bs4 import BeautifulSoup as bs
# soup = bs(open("C:\\Users\\\\Mudit Agarwal\\\\OneDrive\\\\Documents\\\\PLayers.txt", 'r').read())

# print(soup.prettify())

# allPlayers = soup.findAll("span", {"class": "fn"})

# for p in allPlayers:
#     open("C:\\\\Users\\\\Mudit Agarwal\\\\OneDrive\\\\Documents\\\\PLayersName.txt",'a').write(p.text+'\\\\n')

# trs = soup.findAll("tr")
# # tds = [tr.findAll("td")[0] or for
# tds = []
# for tr in trs:
#     ttds = tr.findAll("td")
#     if len(ttds):
#         tds.append(ttds[0])

# for td in tds:
#     print(td.find("a").attrs["href"])
#     open("C:\\\\Users\\\\Mudit Agarwal\\\\OneDrive\\\\Documents\\\\PLayersLink.txt",'a').write(td.find("a").attrs["href"]+'\\\\n')

#hr team ka page download kr rha
# import re
# team_links = list(open("C:\\\\Users\\\\Mudit Agarwal\\\\OneDrive\\\\Documents\\\\PLayersLink.txt",'r').read().splitlines())
# for link in team_links:
#     text = requests.get("http://www.wikipedia.com"+link).text
#     s = bs(text)
#     # print(s.findAll("h2"))
#     table = s.find('span', attrs={"class": "mw-headline"}, text=re.compile(r'.*player.*', re.I)).parent.findNext('tbody')
#     trs = table.findAll("tr")
#     tds = []
#     for tr in trs:
#         ttds = tr.findAll("td")
#         if len(ttds):
#             tds.append(ttds)

#     for td in tds:
#         print(td)
        # print(td.find("a").attrs["href"])
        # open("C:\\\\Users\\\\Mudit Agarwal\\\\OneDrive\\\\Documents\\\\PLayersLink.txt",'a').write(td.find("a").attrs["href"]+'\\\\n')
# tds = [tr.findAll("td")[0] or for

import json , time

playerData = []

names = list(open("C:\\Users\\Mudit Agarwal\\OneDrive\\Documents\\Webd\\React_JS\\example-api\\public\\PLayersName_Scottish_League.txt",'r').read().splitlines())
print(len(names))
try:
    for name in names:
        url = f"https://soccer.sportmonks.com/api/v2.0/players/search/{parse.quote(name)}?api_token=8VQ50NfoYQPVMrlD7qJG6zQrMs1Rs0eEgCuwWW7ysS4BeAvq2PDMHjUKO5Dj"
        print(url)
        data = requests.get(url).text
        dat = json.loads(data)
        playerData.append(dat["data"][0])
        print(name)
        time.sleep(0.5)
except Exception as e: 
    print(e)
    print("exception")
open("C:\\Users\\Mudit Agarwal\\OneDrive\\Documents\\Webd\\React_JS\\example-api\\public\\PLayersName_Scottish_League.json",'a').write(json.dumps(playerData))



