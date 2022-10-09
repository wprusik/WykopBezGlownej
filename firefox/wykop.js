function modifyNavEntry(key, textContent, title) {
    let entry = document.querySelector('#nav > .wrapper > ul.mainnav > li > a[href^="https://www.wykop.pl/' + key + '"]');
    entry.textContent = textContent;
    entry.title = title;
}


function removeAnnoyingTagsFromFooter() {
    let annoyingTags = ['covid', 'covid19', 'rosja', 'ukraina', 'pis', 'wojna', 'afera', 'bekazpisu', 'bekazprawakow', 'bezkazlewakow', 'odra', 'polityka'] // todo - niech user sam definiuje te addsy
    for (let i = 0; i < annoyingTags.length; i++) {
        let footerTag = document.querySelector('#footer > .wrapper > div.width-one-third > div > a[title="' + annoyingTags[i] + '"]')
        let navTag = document.querySelector('#site > .wrapper > .nav > ul > li > a[href^="https://www.wykop.pl/tag/znaleziska/' + annoyingTags[i] + '"]')
        if (footerTag) {
            footerTag.remove()
        }
        if (navTag) {
            navTag.remove()
        }

    }
}

function ignoreError(callback) {
    try {
        callback.call()
    } catch (err) {
    }
}

window.onload = clearHomePage
setTimeout(clearHomePage, 500)

function clearHomePage() {
    let isHomePage = document.title.startsWith('Wykop.pl - newsy, aktualn');
    if (isHomePage) {
        let mainGridSelector = 'div.grid.m-reset-float > div.grid-main '
        ignoreError(() => document.querySelector(mainGridSelector + '> div.nav').remove())
        ignoreError(() => document.getElementById('autopromotion').remove())
        ignoreError(() => document.getElementById('dyingLinksBox').remove())
        ignoreError(() => document.getElementById('wpladtop').remove())
        ignoreError(() => document.getElementById('wpladbottom').remove())
        ignoreError(() => document.getElementById('wpladtop-optad').remove())
        ignoreError(() => document.querySelectorAll('div[class^="google_"]').forEach(el => el.remove()))
        ignoreError(() => document.getElementById('itemsStream').innerHTML = `<div className="article clearfix preview dC" 
                style="text-align: center;font-size: 3.5em;padding-top: 4.7em;" id="lennyface-przodowy">( ͡° ͜ʖ ͡°)</div>`)
        ignoreError(() => document.querySelector(mainGridSelector + '> div.pager').remove())
        ignoreError(() => document.getElementById('wpladbox1').remove())
        ignoreError(() => document.getElementById('wpladbox2').remove())
        ignoreError(() => document.querySelector('#site > .wrapper > .grid-right').innerHTML = `<div class="r-block link-list-popular"         
                style="text-align: center;padding: 10em 0;">No jeszcze reklam by tu brakowało</div>`)
        ignoreError(() => Array.from(document.getElementsByClassName('annotation')).forEach(el => el.remove()))
        ignoreError(() => Array.from(document.getElementsByClassName('stickyAdDesktop')).forEach(el => el.remove()))

        modifyNavEntry('wykopalisko', 'Wykopalisko', 'lepiej tu nie kopać')
        modifyNavEntry('hity', 'Hity', 'takie ciastka')
        modifyNavEntry('mikroblog', 'Mirkoblog', 'nie wymaga wyjaśnienia')
        modifyNavEntry('moj', 'Mój Wypok', 'treści obserwowanych Mirasów')

        ignoreError(() => removeAnnoyingTagsFromFooter())

        setInterval(() => {
            let lenny = document.getElementById('lennyface-przodowy')
            lenny.textContent = '( ͡º ͜ʖ ͡º)'
            setTimeout(() => lenny.textContent = '( ͡° ͜ʖ ͡°)', 900)
        }, 7000)
    }
}
