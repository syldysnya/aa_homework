export const fetchSearchGiphys = (searchTerm) => (
    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=HqGoCNqPpVyzilioQYMBk1zc1NDLBGn5&limit=2`
    })
)