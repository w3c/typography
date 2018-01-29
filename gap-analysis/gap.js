var intro = `
<p>The W3C needs to make sure that the text layout and typographic needs
 of scripts and languages around the world are built in to technologies 
such as HTML, CSS, SVG, etc. so that Web pages and eBooks can look and 
behave as  people expect around the world.
</p>
<p>This page documents issues for a given script or language in terms of
 support in specifications or user agents. If you want to raise an issue
 or comment against this page, use the <a href="https://github.com/w3c/typography/issues">github issues list</a>.</p>
<p>A summary of this report and others can be found as part of a <a href="http://w3c.github.io/typography/gap-analysis/language-matrix.html">matrix in the overview page</a>.</p>
<p>Each section starts with a prompt in italicised text, intended to 
help you think of things that might be addressed in that section. When 
summarising the situation, try to indicate which languages you are 
covering with your text. Use clear signposting where there are divergent
 issues related to specific languages.</p>
<p>Data for this page is provided in a javascript file.  For each section,  add all useful comments to the <code class="kw" translate="no">comments</code> field.<code class="kw" translate="no"></code> Set the <code class="kw" translate="no">status</code> to one of the following, which indicates <em>the impact of the missing features on the ability to use the language on the Web</em>
 (ie. if a feature is unavailable the appropriate label isn't 
necessarily 'broken', the label assigned depends on the importance of 
that feature to using the language on the Web).</p>
<ul>
  <li>ok (no problems)</li>
  <li>na (not applicable)</li>
  <li>advanced (work needed to support advanced applications, such as fine quality book production)</li>
  <li>basic (work is needed to support  styling for basic/common web page use in this language)</li>
  <li>broken (work needed to enable interoperable semantics, or basic 
display on the Web that prevents effective use of the Web for this 
language).</li>
  </ul>
<p>This report was compiled by: <span id="compilers">r12a</span></p>
`

var encodingPrompt = `
Are there any character repertoire issues preventing use of this script on the Web? Do variation selectors need attention?
`

var fontsPrompt = `
Do the standard fallback fonts used in browsers (eg. serif, sans-serif, cursive, etc.) match expectations? Are special font 
or OpenType features needed for this script that are not available?  <a href="http://w3c.github.io/typography/index#font-style">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Afont-style%20label%3Atype-info-request">check for currently needed data</a>.
`

var fontstylePrompt = `
 Do italic fonts lean in the right direction? Is synthesised italicisation problematic? <a href="http://w3c.github.io/typography/index#font-style">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Afont-style%20label%3Atype-info-request">check for currently needed data</a>.
`

var glyphsPrompt = `
 Do italic fonts lean in the right direction? Is synthesised italicisation problematic? <a href="http://w3c.github.io/typography/index#font-style">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Afont-style%20label%3Atype-info-request">check for currently needed data</a>.
`

var cursivePrompt = `
 If this script is cursive (eg. Arabic, N'Ko, Syriac, etc), are there problems or needed features related to the handling of 
cursive text? <a href="http://w3c.github.io/typography/index#cursive">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Acursive%20label%3Atype-info-request">check for currently needed data</a>.
`

var transformsPrompt = `
Does your script need special text transforms that are not supported? Does your script convert letters to uppercase, 
capitalised and lowercase alternatives according to your typographic needs? Do you need to to convert between half-width and full-width presentation forms? <a href="http://w3c.github.io/typography/index#transforming_characters">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Atext-transform%20label%3Atype-info-request">check for currently needed data</a>.
`

var numbersPrompt = `
If  the script has its own set of number digits, are there any issues in how they are used? Does the script or language use 
special format patterns that are problematic?  <a href="http://w3c.github.io/typography/index#numbers">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Anumbers%20label%3Atype-info-request">check for currently needed data</a>.
`

var boundariesPrompt = `
When you double- or triple-click on the text, is the expected range of characters highlighted? When you move through the text with the cursor, or backspace, etc. do you see the expected behaviour? Are there issues when applying punctuation than could be fixed by the application? <a href="http://w3c.github.io/typography/index#graphemes">See available information</a>  or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aboundaries%20label%3Atype-info-request">check for currently needed data</a>.
`

var quotationsPrompt = `
Are there any issues when dealing with quotations marks, especially when nested? Should block quotes be indented or handled specially? <a href="http://w3c.github.io/typography/index#quotations">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aquotations%20label%3Atype-info-request">check for currently needed data</a>.
`

var spacingPrompt = `
Many scripts create emphasis or other effects by spacing out the letters or syllables in a word. We know there are questions here about how this should work in Indic and SE Asian scripts, and in Arabic-based scripts.  Are there requirements for other scripts that we should add? (For justification related spacing, see below.) See <a href="http://w3c.github.io/typography/index#letter_spacing">available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Ainline-spacing%20label%3Atype-info-request">check for currently needed data</a>.
`

var rubyPrompt = `
The ruby spec currently specifies an initial subset of requirements for fine-tuning the typography of phonetic and semantic annotations of East Asian text, including furigana, pinyin and zhuyin fuhao systems.  Is is adequate for what it sets out to do?  What other controls will be needed in the future? <a href="http://w3c.github.io/typography/index#ruby_annotation">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aruby%20label%3Atype-info-request">check for currently needed data</a>.
`

var textdecorationPrompt = `
Some aspects related to the drawing of lines alongside or through text involve local typographic considerations. Do underlines need to be broken in special ways for this script? Do you need support for additional line shapes or widths? Does the distance or position of the lines relative to the text need to vary in ways that are not achievable? Are lines correctly drawn relative to vertical text? <a href="http://w3c.github.io/typography/index#text_decoration">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Atext-decoration%20label%3Atype-info-request">check for currently needed data</a>.
`

var emphasisPrompt = `
Bold and italic are not always appropriate for expressing emphasis, and some scripts have their own unique ways of doing it, that are not in the Western tradition at all. Does this script require support for emphasising or highlighting text that cannot be achieved currently?  <a href="http://w3c.github.io/typography/index#emphasis">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aemphasis%20label%3Atype-info-request">check for currently needed data</a>.
  `

var bidiPrompt = `
If this script runs right-to-left, are there any issues when handling that? Is bidirectional text adequately supported? <a href="http://w3c.github.io/typography/index#bidirectional_text_direction">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Abidi%20label%3Atype-info-request">check for currently needed data</a>.
`

var otherinlinePrompt = `
Does your script have special ways of representing inline notes (such as wakiten or kumimoji in Japanese) or other inline features that need to be supported? <a href="http://w3c.github.io/typography/index#other_inline_features">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Ainline-features%20label%3Atype-info-request">check for currently needed data</a>.
`

var linebreakPrompt = `
Does the browser capture the rules about the way text in your script wraps when it hits the end of a line?  What characters should not appear at the end or start of a line, and what should be done to prevent that? Does line-breaking wrap whole 'words' at a time, or characters, or something else (such as syllables in Tibetan)? <a href="http://w3c.github.io/typography/index#line_breaking">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aline-break%20label%3Atype-info-request">check for currently needed data</a>.
`

var hyphenationPrompt = `
Is hyphenation used for your script, or something else? If hyphenation is used, does it work as expected? <a href="http://w3c.github.io/typography/index#hyphenation">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Ahyphenation%20label%3Atype-info-request">check for currently needed data</a>.
`

var justificationPrompt = `
 When text in a paragraph needs to have flush lines down both sides, does it follow the rules for your script? Does the script need assistance to conform to a grid pattern? Does your script allow punctuation to hang outside the text box at the start or end of a line? Where adjustments are need to make a line flush, how is that done? Do you shrink/stretch space between words and/or letters? Are word baselines stretched, as in Arabic? <a href="http://w3c.github.io/typography/index#justification">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Ajustification%20label%3Atype-info-request">check for currently needed data</a>.
`

var countersPrompt = `
The CSS Counter Styles specification describes a limited set of simple and complex styles for counters to be used in list numbering, chapter heading numbering, etc. Are the details correct? We have another document that provides over 120 templates for user-defined counter styles in over 30 scripts. Are there more? Are there other aspects related to counters and lists that need to be addressed? <a href="http://w3c.github.io/typography/index#counters">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Acounter-styles%20label%3Atype-info-request">check for currently needed data</a>.
`

var initialletterPrompt = `
Does the browser or ereader correctly handle special styling of the initial letter of a line or paragraph, such as for drop caps or similar? <a href="http://w3c.github.io/typography/index#initial_letter">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Ainitial-letter%20label%3Atype-info-request">check for currently needed data</a>.
`

var baselinesPrompt = `
Does the browser support  requirements for baseline alignment between mixed scripts and in general? <a href="http://w3c.github.io/typography/index#baselines_inline_alignment">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Abaselines%20label%3Atype-info-request">check for currently needed data</a>.
`

var bidilayoutPrompt = `
When content can flow vertically and to the left or right, how do you specify the location of objects, text, etc. relative to the flow? For example, keywords 'left' and 'right' are likely to need to be reversed for pages written in English and page written in Arabic. <a href="http://w3c.github.io/typography/index#direction_agnostic">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Abidi%20label%3Atype-info-request">check for currently needed data</a>.
`

var verticalPrompt = `
Are the script requirements for vertically oriented text met?  What about if you mix vertical text with scripts that are normally only horizontal? Do you need a switch to use different characters in vertical vs. horizontal text? Does the browser support short runs of horizontal text in vertical lines (tate-chu-yoko in Japanese) as expected? Is the orientation of characters and the directional ordering of characters supported as needed? <a href="http://w3c.github.io/typography/index#vertical_text">See available information</a>.
`

var notesPrompt = `
Does your script have special requirements for notes, footnotes, endnotes or other necessary annotations of this kind in the way needed for your culture? <a href="http://w3c.github.io/typography/index#notes_footnotes">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Anotes-footnotes%20label%3Atype-info-request">check for currently needed data</a>.
`

var pageheadersPrompt = `
Are there special conventions for page numbering, or the way that running headers and the like are handled? <a href="http://w3c.github.io/typography/index#page_numbering_running_headers">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Apage-numbering%20label%3Atype-info-request">check for currently needed data</a>.
`

var morepagePrompt = `
Some cultures define page areas and page progression direction very differently from those in the West (eg. kihon hanmen in Japanese). Is this an issue for you? Are widows and orphans relevant? In what order do pages progress, RTL or LTR? <a href="http://w3c.github.io/typography/index#more_page_layout_and_pagination">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Apagination%20label%3Atype-info-request">check for currently needed data</a>.
`

var culturespecificPrompt = `
Sometimes a script or language does things that are not common outside of it sphere of influence. This is a loose bag of additional items that weren't previously mentioned.</p> <p class="prompt">This section may also be relevant for observations related to locale formats (such as number, date, currency, format support).
`

var otherPrompt = `
There are many other CSS modules which may need review for script-specific requirements, not to mention the SVG, HTML, Speech, MathML and other specifications.</p><p class="prompt">What else is likely to cause problems for worldwide deployment of the Web, and what requirements need to be addressed to make the Web function well locally?
`



















