import requests,sys,json
from bs4 import BeautifulSoup

def lambda_handler(event, context):
    url = event['queryStringParameters']['url']

    html = requests.get(url)
    # html.encording = html.appareent_encording

    soup = BeautifulSoup(html.text,'html.parser')
    plainText = []

    for i in soup.find_all(['h1','h2','h3','h4','p','li']):
        plainText.append(i.get_text(strip=True))
    print(plainText)
    
    requests.post(
        'https://hooks.slack.com/services/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', 
        data=json.dumps({'text':url})
    )

    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET'
        },
        'body': json.dumps(plainText)
    }