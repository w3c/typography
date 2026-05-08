function languageMatrixTranslationUrl(lang) {
	if (typeof f !== 'undefined' && f.translationPaths && f.translationPaths[lang]) return f.translationPaths[lang]
	if (lang === 'en') return 'language-matrix.html'
	return "language-matrix." + lang + ".html"
	}

function languageMatrixLanguageName(lang) {
	var names = {
		en: 'English',
		'zh-hans': '简体中文'
		}
	return names[lang] || lang
	}

function addLanguageMatrixTranslationLinks() {
	var container = document.getElementById('translationLinks')
	if (!container || typeof trans === 'undefined' || !trans.versions) return

	var currentLang = document.documentElement.lang.toLowerCase()
	var links = []
	for (var i = 0; i < trans.versions.length; i++) {
		var lang = trans.versions[i].toLowerCase()
		if (lang === currentLang) continue
		links.push('<a href="' + languageMatrixTranslationUrl(lang) + '" lang="' + lang + '" hreflang="' + lang + '" translate="no">' + languageMatrixLanguageName(lang) + '</a>')
		}

	if (links.length === 0) return

	var label = currentLang === 'zh-hans' ? '其他语言版本：' : 'Translations: '
	container.className = 'translationLinks noprint'
	container.innerHTML = '<p>' + label + links.join(' • ') + '</p>'
	}

addLanguageMatrixTranslationLinks()
