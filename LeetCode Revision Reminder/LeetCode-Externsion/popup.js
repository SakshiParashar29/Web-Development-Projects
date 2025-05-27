let problemURL = document.getElementById('problemUrl');
let btn = document.getElementById('savebtn');
let msg = document.getElementById('message');

// chrome.storage.local.clear(() => {
//     console.log("✅ Cleared all old local storage data.");
// });

btn.addEventListener('click', () => {
    let URL = problemURL.value;
    if(!URL)
    {
        msg.innerText = 'Please enter the valid URL!';
        setTimeout(() => {
            msg.innerText = " ";
            problemURL.value = "";
        }, 2000);
        return;
    }
    let problem = {
        url: URL,
        id: Date.now(),
        time: new Date().toISOString(),
    }
    
    chrome.storage.local.get(['bookmarks'], (data) => {
        let bookmarks = data.bookmarks || [];
        
        
        let present = bookmarks.some((p) => p.url === URL);
        if(present)
        {
            msg.innerText = 'Bookmark already Saved!!';
            setTimeout(() => {
                msg.innerText = " ";
                problemURL.value = "";
            }, 2000);
            return;
        }
        bookmarks.push(problem);
        chrome.storage.local.set({'bookmarks': bookmarks}, () => {
            msg.innerText = 'Bookmark Saved!!';
               setTimeout(() => {
                   msg.innerText = " ";
                   problemURL.value = "";
               }, 2000);
            console.log("Bookmarks: ", bookmarks);
        });
    });
});