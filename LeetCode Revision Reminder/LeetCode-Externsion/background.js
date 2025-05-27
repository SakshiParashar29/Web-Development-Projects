let revisit = [3, 5, 7, 11, 15, 20, 30];

const sendNotification = (bookmark) => {
    chrome.notifications.create(bookmark.id.toString(), {
        type: "basic",
        iconUrl: "icon.png",
        title: "Revision Reminder",
        message: `Time to revisit: ${bookmark.url}`,
        priority: 2
    })
}

function checkBookmarksandNotify()
{
    chrome.storage.local.get(['bookmarks'], (data) => {
    let bookmarks = data.bookmarks || [];
    bookmarks.forEach(bookmark => {
        let id = bookmark.id;
        let time = Date.now();
        let diff = time - id;
        let days = Math.floor(diff/(1000 * 60 * 60 * 24));

        if(revisit.includes(days))
        {
            sendNotification(bookmark);
        }
    });

})
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("dailyReminder", {
        periodInMinutes: 1440 
    });
    checkBookmarksandNotify(); 
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "dailyReminder") {
        checkBookmarksandNotify();
    }
});