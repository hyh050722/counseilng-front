const baseUrl = 'http://127.0.0.1:5000'

async function getData() {
  // /articles 테스트 API
  const url = baseUrl + '/articles'
  const response = await fetch(url, {
    /* POST일 경우 아래에 'POST'라고 넣기 */
    method: 'GET',
  })

  const data = await response.json()
  return data
}

async function createList(data) {
  const list = document.querySelector('#list')
  const template = document.querySelector('#template')

  // 데이터가 배열일 때
  for (let i = 0; i < data.length; i++) {
    const article = data[i]

    template.setAttribute('href', '/articles?id=' + article.id)

    // 아이템 안에 텍스트를 넣습니다.
    template.querySelector('.date').innerHTML = new Date(
      article.created_at
    ).toDateString()
    template.querySelector('.title').innerHTML = article.title
    template.querySelector('.article').innerHTML = article.content
    template.querySelector('.person').innerHTML = '아이디: ' + article.user_id

    const clonedTemplate = template.cloneNode(true)
    // 생성한 요소를 <li> 태그 안에 넣습니다.
    list.appendChild(clonedTemplate)
  }
}

async function loadList() {
  const data = await getData()
  await createList(data)
}

// 페이지가 다 로드되면 loadList 함수 호출
window.addEventListener('load', loadList)
