
// VERTICAL TEXT

vertical_text = {

"requirements": [
	{ 	"title":"Arabic Layout Requirements",
		"sections": [ 
			{"title":"Vertical text", "url":"https://w3c.github.io/alreq/#h_vertical_text"}
			]
		},
	{ 	"title":"Chinese Layout Requirements",
		"sections": [ 
			{"title":"Writing Modes in Chinese", "url":"https://www.w3.org/TR/clreq/#writing_modes_in_chinese_composition"},
			{"title":"Major Differences Between Horizontal and Vertical Writing Modes", "url":"https://www.w3.org/TR/clreq/#major_differences_between_horizontal_and_vertical_writing_modes"}
			]
		},
	{ 	"title":"Indic Layout Requirements",
		"sections": [ 
			{"title":"Vertical arrangements of characters", "url":"https://w3c.github.io/ilreq/#h_vertical_arrangements_of_characters"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Vertical Writing Mode and Horizontal Writing Mode", "url":"https://www.w3.org/TR/jlreq/#vertical_writing_mode_and_horizontal_writing_mode"},
			{"title":"Japanese and Western Mixed Text Composition (including Horizontal-in-Vertical Text Composition)", "url":"https://www.w3.org/TR/jlreq/#japanese_and_western_mixed_text_composition"}
			]
		},
	{ 	"title":"Implementing Japanese Subtitles on Netflix",
		"sections": [ 
			{"title":"Vertical Subtitles", "url":"https://medium.com/netflix-techblog/implementing-japanese-subtitles-on-netflix-c165fbe61989#8caf"},
			{"title":"Tate-chu-yoko", "url":"https://medium.com/netflix-techblog/implementing-japanese-subtitles-on-netflix-c165fbe61989#877a"}
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Writing Direction (Horizontal Writing, Vertical Writing)", "url":"https://www.w3.org/TR/klreq/#para-direction"},
			{"title":"Writing Process for Punctuation Marks, etc", "url":"https://www.w3.org/TR/klreq/#punc-process"},
			{"title":"Hangul and Latin Mixed Writing (Including Partial Horizontal Writing in Vertical Writing)", "url":"https://www.w3.org/TR/klreq/#hangulromanmix"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Vertical text", "url":"https://w3c.github.io/mlreq/#h_vertical_text"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":true, "useful-discussion":true, "samples":true,


"spec_links": [
	{	"title":"CSS3 Writing Modes",
		"sections": [
			{"title":"Introduction to Vertical Text Layout","url":"https://drafts.csswg.org/css-writing-modes-3/#intro-text-layout"},
			{"title":" Horizontal-in-Vertical Composition: the text-combine-upright property","url":"https://drafts.csswg.org/css-writing-modes-3/#text-combine-upright"}
			]
		}
	],


"tests": [
	["CSS Writing Modes: Vertical text","https://w3c.github.io/i18n-tests/results/writing-mode-vertical"],
	["CSS Writing Modes: Horizontal in vertical","https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html"],
	],


"gap_analysis": [
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#vertical"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#vertical"],
	["Dutch","http://w3c.github.io/typography/gap-analysis/docs/latn-nl#vertical"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#vertical"],
	["Hungarian","http://w3c.github.io/typography/gap-analysis/docs/latn-hu#vertical"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#vertical"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#vertical"]
	]
}





// BIDIRECTIONAL TEXT DIRECTION

bidi_text = {

"requirements": [
	{ 	"title":"Additional Requirements for Bidi in HTML", "url":"https://www.w3.org/TR/html-bidi/",
		"sections": [ 
			]
		},
	{ 	"title":"Text Layout Requirements for the Arabic Script",
		"sections": [ 
			{"title":"Direction", "url":"http://w3c.github.io/alreq/index.html#h_direction"},
			{"title":"Direction", "url":"http://w3c.github.io/alreq/index.html#h_direction"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":false, "browser-type-bug":true, "useful-discussion":true, "samples":true,


"spec_links": [
	{	"title":"HTML5",
		"sections": [
			{"title":"The dir attribute","url":"https://www.w3.org/TR/html5/dom.html#the-dir-attribute"}
			]
		},
	{	"title":"CSS3 Writing Modes",
		"sections": [
			{"title":"Inline direction and bidirectionality","url":"https://drafts.csswg.org/css-writing-modes-3/#text-direction"}
			]
		}
	],


"tests": [
	["HTML5: dir basics","https://w3c.github.io/i18n-tests/results/the-dir-attribute"],
	["HTML5: dir isolation","https://w3c.github.io/i18n-tests/results/the-dir-attribute-isolation"],
	["HTML5: Bidirectional text rendering","https://w3c.github.io/i18n-tests/results/bidi-text-rendering"],
	["HTML5: dir=auto","https://w3c.github.io/i18n-tests/results/the-dir-attribute-auto"],
	["HTML5: The bdo element","https://w3c.github.io/i18n-tests/results/the-bdo-element"],
	["HTML5: The dirname attribute","https://w3c.github.io/i18n-tests/results/the-dirname-attribute"],
	["HTML5: Native user interfaces","https://w3c.github.io/i18n-tests/results/native-user-interfaces"],
	["CSS Writing Modes: Bidi","https://w3c.github.io/i18n-tests/results/writing-modes-bidi"]
	],


"gap_analysis": [
	["Arabic & Persian","https://w3c.github.io/alreq/gap-analysis/#bidi"]
	]
}









// FONTS

fonts = {

"requirements": [
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Typefaces for Chinese Characters", "url":"https://w3c.github.io/clreq/#commonly_used_chinese_typefaces"}
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"'Letter Face Position in Character Frame' Standard", "url":"https://www.w3.org/TR/klreq/#fonts-letterfaceposn"},
			{"title":"Kerning for Hangul Fonts", "url":"https://www.w3.org/TR/klreq/#fonts-kerning"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Fonts", "url":"https://drafts.csswg.org/css-fonts/",
		"sections": [
			]
		},
	],


"tests": [
	["Exploratory: Language-specific default fonts","https://w3c.github.io/i18n-tests/results/default-font"]
	],


"gap_analysis": [
	["Cherokee","http://w3c.github.io/typography/gap-analysis/docs/cher#fonts"],
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#fonts"],
	["Javanese","https://w3c.github.io/sealreq/gap-analysis/java-gap#fonts"],
	["Mongolian","https://w3c.github.io/mlreq/gap-analysis/#fonts"],
	]
}








// FONT STYLES

font_style = {

"requirements": [
	{ 	"title":"Arabic layout requirements",
		"sections": [ 
			{"title":"Arabic Style and Calligraphy", "url":"https://w3c.github.io/alreq/#h_arabic_style_and_calligraphy"},
			{"title":"Different Writing Styles", "url":"https://w3c.github.io/alreq/#h_different_writing_styles"},
			]
		},
	{ 	"title":"Implementing Japanese Subtitles on Netflix", 
		"sections": [ 
			{"title":"Slanted Text", "url":"https://medium.com/netflix-techblog/implementing-japanese-subtitles-on-netflix-c165fbe61989#6d57"}
			]
		},
	{ 	"title":"An Introduction to Writing Systems & Unicode",
		"sections": [ 
			{"title":"Italics (Cyrillic)", "url":"https://r12a.github.io/scripts/tutorial/part6#italics"}
			]
		},
	{ 	"title":"Khmer layout requirements",
		"sections": [ 
			{"title":"Font styles", "url":"https://w3c.github.io/sealreq/khmer/#h_font_styles"}
			]
		}
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS Fonts", 
		"sections": [
			{"title":"Font style: the font-style property", "url":"https://drafts.csswg.org/css-fonts/#font-style-prop"},
			{"title":"Font weight: the font-weight property", "url":"https://drafts.csswg.org/css-fonts/#font-weight-prop"}
			]
		},
	],


"tests": [
	],


"gap_analysis": [
	["Arabic & Persian","https://w3c.github.io/alreq/gap-analysis/#fontstyle"]
	]
}








// GLYPH SHAPING & POSITIONING

glyphs = {

"requirements": [
	{ 	"title":"Arabic Layout Requirements", 
		"sections": [ 
			{"title":"Ligatures", "url":"https://w3c.github.io/alreq/#h_ligatures"},
			{"title":"Diacritics", "url":"https://w3c.github.io/alreq/index.html#h_diacritics"},
			{"title":"Positioning diacritics relative to base characters", "url":"https://w3c.github.io/alreq/#h_diacritic_position"},
			]
		},
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Arabic & Persian","https://w3c.github.io/alreq/gap-analysis/#glyphs"]
	]
}








// CURSIVE

cursive = {

"requirements": [
	{ 	"title":"Arabic Layout Requirements", 
		"sections": [ 
			{"title":"Joining", "url":"https://w3c.github.io/alreq/#h_joining"},
			{"title":"Special requirements when dealing with cursive glyphs", "url":"https://w3c.github.io/alreq/#h_letterhighlights"},
			{"title":"Arabic Script and Typography", "url":"https://w3c.github.io/alreq/#h_arabic_script_and_typography"},
			]
		},
	],


"type-info-request":false, "spec-type-issue":true, "browser-type-bug":true, "useful-discussion":true, "samples":true,


"spec_links": [
	{	"title":"CSS Text",
		"sections": [
			{"title":"Shaping Across Element Boundaries", "url":"https://drafts.csswg.org/css-text/#boundary-shaping"}
			]
		},
	],


"tests": [
	["CSS3 Text, Cursive joining","https://w3c.github.io/i18n-tests/results/css-text-shaping"],
	["Exploratory: Cursive behaviour","https://w3c.github.io/i18n-tests/results/cursive"]
	],


"gap_analysis": [
	["Arabic & Persian","https://w3c.github.io/alreq/gap-analysis/#cursive"]
	]
}







// TRANSFORMING CHARACTERS

transforms = {

"requirements": [
	{ 	"title":"r12a blog", 
		"sections": [ 
			{"title":"Notes on case conversion", "url":"http://r12a.github.io/blog/201512.html#20160907"},
			{"title":"Bicameral scripts", "url":"http://r12a.github.io/blog/201512.html#20161106"}
			]
		},
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	{ 	"title":"CSS3 Text", 
		"sections": [ 
			{"title":"Transforming text", "url":"https://drafts.csswg.org/css-text-3/#transforming"}
			]
		},
	{ 	"title":"CSS Custom Text transformations",  "url":"https://specs.rivoal.net/css-custom-tt/",
		"sections": [ 
			]
		},
	],


"tests": [
	["CSS3 Text: text transform","https://w3c.github.io/i18n-tests/results/text-transform"]
	],


"gap_analysis": [
	["Cherokee","http://w3c.github.io/typography/gap-analysis/docs/cher#transforms"],
	["Dutch","http://w3c.github.io/typography/gap-analysis/docs/latn-nl#transforms"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#transforms"],
	["Greek","http://w3c.github.io/typography/gap-analysis/docs/el-gap/#transforms"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#transforms"]
	]
}







// TEXT SEGMENTATION & SELECTION

boundaries = {

"requirements": [
	{ 	"title":"Arabic Layout Requirements", 
		"sections": [ 
			{"title":"Text Segmentation", "url":"https://w3c.github.io/alreq/#h_segmentation"}
			]
		},
	{ 	"title":"Bengali Layout Requirements", 
		"sections": [ 
			{"title":"Grapheme boundaries", "url":"https://w3c.github.io/iip/bengali/#h_graphemes"},
			{"title":"Word boundaries", "url":"https://w3c.github.io/iip/bengali/#h_words"},
			]
		},
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Characters and Principles for Setting them in Chinese Composition", "url":"https://w3c.github.io/clreq/#characters_and_the_principles_of_setting_them_for_chinese_composition"}
			]
		},
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Grapheme boundaries", "url":"https://w3c.github.io/iip/devanagari/#h_graphemes"},
			{"title":"Word boundaries", "url":"https://w3c.github.io/iip/devanagari/#h_words"},
			]
		},
	{ 	"title":"Indic Layout Requirements", 
		"sections": [ 
			{"title":"Indic orthographic syllable boundaries", "url":"https://w3c.github.io/ilreq/#h_indic_orthographic_syllable_boundaries"},
			{"title":"Text segmentation", "url":"https://w3c.github.io/ilreq/#h_text_segmentation"}
			]
		},
	{ 	"title":"Khmer Layout Requirements", 
		"sections": [ 
			{"title":"Word boundaries", "url":"https://w3c.github.io/sealreq/khmer/#h_words"},
			{"title":"Zero-width space (ZWSP) & Word-joiner (WJ)", "url":"https://w3c.github.io/sealreq/khmer/#h_zwsp"}
			]
		},
	{ 	"title":"Mongolian Layout Requirements", 
		"sections": [ 
			{"title":"Selection rules", "url":"https://w3c.github.io/mlreq/#selection_rules"},
			{"title":"Cursor movement rules", "url":"https://w3c.github.io/mlreq/#cursor_movement"},
			{"title":"Mouse pointer rules", "url":"https://w3c.github.io/mlreq/#mouse_pointer"}
			]
		},
	{ 	"title":"Thai Layout Requirements", 
		"sections": [ 
			{"title":"Word boundaries", "url":"https://w3c.github.io/sealreq/thai/#h_words"},
			{"title":"Zero-width space (ZWSP) & Word-joiner (WJ)", "url":"https://w3c.github.io/sealreq/thai/#h_zwsp"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements", 
		"sections": [ 
			{"title":"Tibetan Syllables", "url":"https://w3c.github.io/tlreq/#tibetan_syllables"},
			{"title":"Text Segmentation in Tibetan", "url":"https://w3c.github.io/tlreq/#text_segmentation"}
			]
		},
	],


"type-info-request":true, "spec-type-issue":false, "browser-type-bug":true, "useful-discussion":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#boundaries"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#boundaries"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#boundaries"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#boundaries"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#boundaries"],
	["Javanese","https://w3c.github.io/sealreq/gap-analysis/java-gap#boundaries"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#boundaries"]
	]
}







// PUNCTUATION

punctuation = {

"requirements": [
	{ 	"title":"Bengali Layout Requirements", 
		"sections": [ 
			{"title":"Phrase boundaries: Danda & double danda", "url":"https://w3c.github.io/iip/bengali/#h_danda"},
			]
		},
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Categories and Usage of Punctuation Marks", "url":"https://w3c.github.io/clreq/#categories_and_usage_of_punctuation_marks"},
			{"title":"Sizes and positions of Punctuation Marks", "url":"https://w3c.github.io/clreq/#glyphs_sizes_and_positions_in_character_faces_of_punctuation_marks"},
			{"title":"Atypical punctuation marks and their composition", "url":"https://w3c.github.io/clreq/#atypical_punctuation_marks_and_their_arrangements"},
			{"title":"Punctuation marks in Chinese", "url":"https://w3c.github.io/clreq/#tables_of_chinese_punctuation_marks"},
			{"title":"Line Composition Rules for Punctuation Marks", "url":"https://w3c.github.io/clreq/#line_composition_rules_for_punctuation_marks"},
			{"title":"Prohibition Rules for Unbreakable Marks", "url":"https://w3c.github.io/clreq/#h-unbreakable_marks_punctuation"}
			]
		},
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Phrase boundaries: Danda & double danda", "url":"https://w3c.github.io/iip/devanagari/#h_danda"},
			]
		},
	{ 	"title":"Ethiopic Layout Requirements", 
		"sections": [ 
			{"title":"Punctuation", "url":"https://w3c.github.io/elreq/#punctuation"}
			]
		},
	{ 	"title":"Hangul Layout Requirements", 
		"sections": [ 
			{"title":"Hangul Punctuation Mark Code Ranges based on Unicode", "url":"https://w3c.github.io/klreq/#fonts-punctuationcodes"},
			{"title":"Hangul Punctuation Marks in Horizontal and Vertical Writing", "url":"https://w3c.github.io/klreq/#fonts-horizvertpunct"},
			{"title":"Arrangement of 'Letter Face Position in Character Frame' for Full Width Parentheses", "url":"https://w3c.github.io/klreq/#fonts-faceposnparens"},
			{"title":"Arrangement of 'Letter Face Position in Character Frame' for Punctuation", "url":"https://w3c.github.io/klreq/#fonts-facepos-punc"},
			{"title":"Writing Process for Punctuation Marks, etc.", "url":"https://w3c.github.io/klreq/#punc-process"}
			]
		},
	{ 	"title":"Indic Layout Requirements", 
		"sections": [ 
			{"title":"Guiding principles of Line breaking for Indian languages", "url":"https://w3c.github.io/ilreq/#h_guiding_principles_line_breaking_indian_languages"}
			]
		},
	{ 	"title":"Japanese Layout Requirements", 
		"sections": [ 
			{"title":"Characters Used for Japanese Composition", "url":"https://w3c.github.io/jlreq/#characters_used_for_japanese_composition"},
			{"title":"Line Composition Rules for Punctuation Marks", "url":"https://w3c.github.io/jlreq/#line_composition_rules_for_punctuation_marks"},
			{"title":"Examples of Items Jutting Out of the Kihon-hanmen", "url":"https://w3c.github.io/jlreq/#examples_of_items_jutting_out_of_the_kihonhanmen"},
			{"title":"Character Positioning based on Kihon-hanmen", "url":"https://w3c.github.io/jlreq/#character_positioning_based_on_kihonhanmen_design"},
			{"title":"Design Grouping of Characters and Symbols depending on their Positioning", "url":"https://w3c.github.io/jlreq/#grouping_of_characters_and_symbols_depending_on_their_positioning"}
			]
		},
	{ 	"title":"Mongolian Layout Requirements", 
		"sections": [ 
			{"title":"Punctuation rules", "url":"https://w3c.github.io/mlreq/#punctuation_rules"},
			{"title":"Display rules for Mongolian space", "url":"https://w3c.github.io/mlreq/#mongolian_space"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements", 
		"sections": [ 
			{"title":"Tibetan Punctuation", "url":"https://w3c.github.io/tlreq/#punctuation"},
			{"title":"Character List", "url":"https://w3c.github.io/tlreq/#character_list"}
			]
		},
	],


"type-info-request":true, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	]
}







// TEXT DECORATION

text_decoration = {

"requirements": [
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Indicator Punctuation Marks > Fullwidth low line", "url":"https://w3c.github.io/clreq/#indication_punctuation_marks"},
			{"title":"Indicator Punctuation Marks > Emphasis Dots", "url":"https://w3c.github.io/clreq/#indication_punctuation_marks"}
			]
		},
	{ 	"title":"Wikipedia: Underlines in non-Latin scripts (chinese)", "url":"https://en.wikipedia.org/wiki/Underline#Underlines_in_non-Latin_scripts",
		"sections": [ 
			]
		},
	{ 	"title":"Ethiopic Layout Requirements", 
		"sections": [ 
			{"title":"Emphasis", "url":"https://w3c.github.io/elreq/#h_emphasis"},
			{"title":"Emphasis Within Prose", "url":"https://w3c.github.io/elreq/#emphasis_within_prose"},
			{"title":"Emphasis With Ethiopic Wordspace", "url":"https://w3c.github.io/elreq/#emphasis_with_wordspace"},
			{"title":"Section Headings", "url":"https://w3c.github.io/elreq/#section_headings"}
			]
		},
	{ 	"title":"Japanese Layout Requirements", 
		"sections": [ 
			{"title":"Examples of Items Jutting Out of the Kihon-hanmen", "url":"https://www.w3.org/TR/jlreq/#examples_of_items_jutting_out_of_the_kihonhanmen"},
			{"title":"Line Gap Arrangement with Ruby and Other Objects", "url":"https://www.w3.org/TR/jlreq/#line_gap_arrangement_with_ruby_and_other_objects"},
			{"title":"Composition of Emphasis Dots", "url":"https://w3c.github.io/jlreq/#composition_of_emphasis_dots"}
			]
		},
	{ 	"title":"Implementing Japanese Subtitles on Netflix", 
		"sections": [ 
			{"title":"Boutens", "url":"https://medium.com/netflix-techblog/implementing-japanese-subtitles-on-netflix-c165fbe61989#8329"}
			]
		},
	{ 	"title":"Mongolian Layout Requirements", 
		"sections": [ 
			{"title":"Text decoration", "url":"https://w3c.github.io/mlreq/#h_text_decoration"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements", 
		"sections": [ 
			{"title":"Text Emphasis and Highlighting", "url":"https://w3c.github.io/tlreq/#emphasis_and_highlighting"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":true, "samples":true,


"spec_links": [
	{ 	"title":"CSS3 Text Decoration", 
		"sections": [ 
			{"title":"Line Decoration: Underline, Overline, and Strike-Through", "url":"https://drafts.csswg.org/css-text-decor-3/#line-decoration"},
			{"title":"Emphasis Marks", "url":"https://drafts.csswg.org/css-text-decor-3/#emphasis-marks"}
			]
		}
	],


"tests": [
	["CSS3 Text decoration, Line decoration","https://w3c.github.io/i18n-tests/results/line-decoration"],
	["CSS3 Text decoration, emphasis marks","https://w3c.github.io/i18n-tests/results/emphasis-marks"]
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#textdecor"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#textdecor"],
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#textdecor"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#textdecor"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#textdecor"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#textdecoration"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#textdecor"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#textdecor"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#textdecor"]
	]
}







// QUOTATIONS

quotations = {

"requirements": [
	{ 	"title":"Bengali Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/iip/bengali/#h_quotations"},
			]
		},
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Indicator Punctuation Marks", "url":"https://w3c.github.io/clreq/#indication_punctuation_marks"}
			]
		},
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/iip/devanagari/#h_quotations"},
			]
		},
	{ 	"title":"Ethiopic Layout Requirements", 
		"sections": [ 
			{"title":"Quotation", "url":"https://w3c.github.io/elreq/#quotation"}
			]
		},
	{ 	"title":"Japanese Layout Requirements", 
		"sections": [ 
			{"title":"Line Head Indent and Line End Indent", "url":"https://www.w3.org/TR/jlreq/#line_head_indent_and_line_end_indent"},
			{"title":"Processing of Spaces between Paragraphs", "url":"https://www.w3.org/TR/jlreq/#processing_of_spaces_between_paragraphs"},
			{"title":"Adjustment of Processing of Realm in Block Direction", "url":"https://www.w3.org/TR/jlreq/#adjustment_of_processing_of_realm_in_block_direction"},
			{"title":"Differences in Vertical and Horizontal Composition in Use of Punctuation Marks", "url":"https://www.w3.org/TR/jlreq/#differences_in_vertical_and_horizontal_composition_in_use_of_punctuation_marks"}
			]
		},
	{ 	"title":"Javanese Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/sealreq/javanese/#h_quotations"}
			]
		},
	{ 	"title":"Lao Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/sealreq/lao/#h_quotations"}
			]
		},
	{ 	"title":"Khmer Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/sealreq/khmer/#h_quotations"}
			]
		},
	{ 	"title":"Tamil Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/iip/tamil/#h_quotations"},
			]
		},
	{ 	"title":"Thai Layout Requirements", 
		"sections": [ 
			{"title":"Quotations", "url":"https://w3c.github.io/sealreq/thai/#h_quotations"}
			]
		},
	],


"type-info-request":true, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{ 	"title":"HTML5", 
		"sections": [ 
			{"title":"The q element", "url":"https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element"},
			{"title":"The blockquote element", "url":"https://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element"}
			]
		},
	{ 	"title":"CSS3 Generated and Replaced Content", 
		"sections": [ 
			{"title":"Specifying quotes with the 'quotes' property", "url":"https://www.w3.org/TR/css-content-3/#quotes"}
			]
		}
	],


"tests": [
	["The q element","https://w3c.github.io/i18n-tests/results/the-q-element.html"]
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#quotations"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#quotations"],
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#quotations"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#quotations"],
	["Dutch","http://w3c.github.io/typography/gap-analysis/docs/latn-nl#quotations"],
	["Greek","http://w3c.github.io/typography/gap-analysis/docs/el-gap/#quotations"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#quotations"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#quotations"],
	["Hungarian","http://w3c.github.io/typography/gap-analysis/docs/latn-hu#quotations"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#quotations"],
	["Javanese","https://w3c.github.io/sealreq/gap-analysis/java-gap#quotations"],
	["Lao","https://w3c.github.io/sealreq/gap-analysis/laoo-gap#quotations"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#quotations"]
	]
}







// INLINE NOTES & ANNOTATIONS

inline_notes = {

"requirements": [
	{ 	"title":"Chinese Layout Requirements", 
		"sections": [ 
			{"title":"Interlinear annotations", "url":"https://w3c.github.io/clreq/#interlinear_annotations"}
			]
		},
	{ 	"title":"Bopomofo on the Web", "url":"https://r12a.github.io/scripts/bopomofo/ontheweb",
		"sections": [ 
			]
		},
	{ 	"title":"The Manual of the Phonetic Symbols of the Mandarin Script", 
		"sections": [ 
			{"title":"english", "url":"http://language.moe.gov.tw/001/Upload/files/site_content/M0001/juyin/html_en/index.html"},
			{"title":"chinese", "url":"http://language.moe.gov.tw/001/Upload/files/site_content/M0001/juyin/html_ch/index.html"}
			]
		},
	{ 	"title":"Japanese Layout Requirements", 
		"sections": [ 
			{"title":"Ruby and Emphasis Dots", "url":"https://www.w3.org/TR/jlreq/#ruby_and_emphasis_dots"},
			{"title":"Positioning of Jukugo-ruby", "url":"https://www.w3.org/TR/jlreq/#positioning_of_jukugoruby"},
			{"title":"Inline Cutting Note (Warichu)", "url":"https://w3c.github.io/jlreq/#inline_cutting_note"},
			{"title":"Superscripts and Superscripts", "url":"https://w3c.github.io/jlreq/#superscripts_and_superscripts"},
			{"title":"Furiwake Processing", "url":"https://w3c.github.io/jlreq/#furiwake_processing"}
			]
		},
	{ 	"title":"r12a blog", 
		"sections": [ 
			{"title":"What’s so difficult about jukugo ruby?", "url":"https://r12a.github.io/blog/201002.html#20100924"}
			]
		},
	{ 	"title":"Use Cases & Exploratory Approaches for Ruby Markup", "url":"https://www.w3.org/TR/ruby-use-cases/",
		"sections": [ 
			]
		},
	{ 	"title":"Implementing Japanese Subtitles on Netflix", 
		"sections": [ 
			{"title":"Rubies", "url":"https://medium.com/netflix-techblog/implementing-japanese-subtitles-on-netflix-c165fbe61989#2ca1"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":true, "useful-discussion":false, "samples":true,


"spec_links": [
	{ 	"title":"HTML5", 
		"sections": [ 
			{"title":"The ruby element", "url":"https://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element"},
			{"title":"The sub and sup elements", "url":"https://www.w3.org/TR/html5/textlevel-semantics.html#the-sub-and-sup-elements"},
			{"title":"The blockquote element", "url":"https://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element"}
			]
		},
	{ 	"title":"CSS3 Ruby", "url":"https://drafts.csswg.org/css-ruby-1/",
		"sections": [ 
			]
		}
	],


"tests": [
	["HTML5: The ruby element and its children","https://w3c.github.io/i18n-tests/results/ruby-html"],
	["CSS Ruby","https://w3c.github.io/i18n-tests/results/css-ruby"]
	],


"gap_analysis": [
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#inlinenotes"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#ruby"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#inlinenotes"]
	]
}







// NUMBERS & DIGITS

numbers = {

"requirements": [
	{ 	"title":"Arabic Layout Requirements", 
		"sections": [ 
			{"title":"Numbers", "url":"https://w3c.github.io/alreq/#h_numbers"},
			]
		},
	],


"type-info-request":true, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#numbers"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#numbers"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#numbers"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#numbers"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#numbers"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#numbers"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#numbers"]
	]
}







// LINE BREAKING

line_breaking = {


"background": [
	{	"title":"Approaches to line breaking", "url":"https://www.w3.org/International/articles/typography/linebreak",
		"sections": [
			]
		}
	],


"requirements": [
	{ 	"title":"Arabic Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/alreq/#h_line_breaking"},
			]
		},
	{ 	"title":"Bengali Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/iip/bengali/#h_line_breaking"},
			]
		},
	{ 	"title":"Chinese Layout Requirements",
		"sections": [ 
			{"title":"Line Composition Rules for Punctuation Marks", "url":"https://w3c.github.io/clreq/#line_composition_rules_for_punctuation_marks"},
			{"title":"Hanging Punctuation at Line End", "url":"https://w3c.github.io/clreq/#hanging_punctuation_marks_at_line_end"}
			]
		},
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/iip/devanagari/#h_line_breaking"},
			]
		},
	{ 	"title":"Indic Layout Requirements",
		"sections": [ 
			{"title":"Guiding principles of Line breaking for Indian languages", "url":"https://w3c.github.io/ilreq/#h_guiding_principles_line_breaking_indian_languages"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Possibilities for Line-breaking between Characters", "url":"https://www.w3.org/TR/jlreq/#possibilities_for_linebreaking_between_characters"}
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Line Breaking Rules", "url":"https://www.w3.org/TR/klreq/#line-break"},
			{"title":"Writing Process for Punctuation Marks, etc", "url":"https://www.w3.org/TR/klreq/#punc-process"}
			]
		},
	{ 	"title":"Javanese Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/sealreq/javanese/#h_line_breaking"}
			]
		},
	{ 	"title":"Lao script layout requirements",
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/sealreq/lao/#h_line_breaking"}
			]
		},
	{ 	"title":"Khmer script layout requirements",
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/sealreq/khmer/#h_line_breaking"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/mlreq/#h_line_breaking"}
			]
		},
	{ 	"title":"Thoughts on Word and Sentence Segmentation in Thai", "url":"http://pioneer.netserv.chula.ac.th/%7Eawirote/ling/snlp2007-wirote.pdf",
		"sections": [ 
			]
		},
	{ 	"title":"Tamil Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/iip/tamil/#h_line_breaking"},
			]
		},
	{ 	"title":"Thai Layout Requirements", 
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/sealreq/thai/#h_line_breaking"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements",
		"sections": [ 
			{"title":"Line breaking", "url":"https://w3c.github.io/tlreq/#line_breaking"}
			]
		}
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	{	"title":"CSS3 Text",
		"sections": [
			{"title":"Line Breaking and Word Boundaries","url":"https://drafts.csswg.org/css-text-3/#line-breaking"}
			]
		}
	],


"tests": [
	["CSS Text: Line breaking","https://w3c.github.io/i18n-tests/results/line-breaking"],
	["CSS Text: Non-tailorable line breaking","https://w3c.github.io/i18n-tests/results/line-breaks-glwj"],
	["CSS Text: Japanese & Chinese line breaks","https://w3c.github.io/i18n-tests/results/line-breaks-jazh"],
	["CSS Text: Word-break","https://w3c.github.io/i18n-tests/results/word-break"]
	],


"gap_analysis": [
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#linebreak"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#linebreak"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#linebreak"],
	["Javanese","https://w3c.github.io/sealreq/gap-analysis/java-gap#linebreak"],
	["Khmer","https://w3c.github.io/sealreq/gap-analysis/khmr-gap#linebreak"],
	["Lao","https://w3c.github.io/sealreq/gap-analysis/laoo-gap#linebreak"]
	]
}







// HYPHENATION

hyphenation = {


"requirements": [
	{ 	"title":"Indic Layout Requirements",
		"sections": [ 
			{"title":"Hyphenation", "url":"https://w3c.github.io/ilreq/#h_hyphenation"}
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Hyphenation", "url":"https://www.w3.org/TR/dpub-latinreq/#hyphenation"},
			{"title":"The Classical Rules of Hyphenation and Pagination", "url":"https://www.w3.org/TR/dpub-latinreq/#the-classical-rules-of-hyphenation-and-pagination"}
			]
		}
	],


"type-info-request":false, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Text",
		"sections": [
			{"title":" Hyphenation: the hyphens property","url":"https://drafts.csswg.org/css-text-3/#hyphenation"}
			]
		}
	],


"tests": [
	["CSS Text: Hyphens","https://w3c.github.io/i18n-tests/results/hyphens"]
	],


"gap_analysis": [
	["Dutch","https://w3c.github.io/typography/gap-analysis/docs/latn-nl#hyphenation"],
	["Hungarian","http://w3c.github.io/typography/gap-analysis/docs/latn-hu#hyphenation"],
	["Javanese","https://w3c.github.io/sealreq/gap-analysis/java-gap#hyphenation"]
	]
}







// TEXT ALIGNMENT & JUSTIFICATION

justification = {


"background": [
	{	"title":"Approaches to full justification", "url":"https://www.w3.org/International/articles/typography/justification",
		"sections": [
			]
		}
	],


"requirements": [
	{ 	"title":"Arabic Layout Requirements",
		"sections": [ 
			{"title":"Justification", "url":"https://w3c.github.io/alreq/index.html#h_justification"},
			{"title":"Kashida", "url":"https://w3c.github.io/alreq/#h_justification_kashida"},
			{"title":"Tatweel", "url":"https://w3c.github.io/alreq/#h_justification_tatweel"},
			{"title":"Combination of the Mechanisms", "url":"https://w3c.github.io/alreq/#h_combination_of_the_mechanisms"},
			]
		},
	{ 	"title":"Arabic text justification", "url":"https://www.tug.org/tugboat/tb27-2/tb87benatia.pdf",
		"sections": [ 
			]
		},
	{ 	"title":"Justify Just or Just Justify (Arabic)", "url":"http://quod.lib.umich.edu/j/jep/3336451.0013.105?view=text;rgn=main",
		"sections": [ 
			]
		},
	{ 	"title":"Typography questions for HTML & CSS: Arabic justification", "url":"http://r12a.github.io/blog/?p=1059",
		"sections": [ 
			]
		},
	{ 	"title":"Rule-based expert system for Urdu nastaleeq justification", "url":"http://www.cle.org.pk/Publication/papers/2004/rule-based-expert-system.pdf",
		"sections": [ 
			]
		},
	{ 	"title":"Chinese Layout Requirements",
		"sections": [ 
			{"title":"Line Composition Rules for Punctuation Marks", "url":"https://w3c.github.io/clreq/#line_composition_rules_for_punctuation_marks"},
			{"title":"Paragraph Adjustment Rules", "url":"https://w3c.github.io/clreq/#paragraph_adjustment_rules"},
			{"title":"Composition of Chinese and Western Mixed Texts", "url":"https://w3c.github.io/clreq/#chinese_and_western_mixed_text_composition"}
			]
		},
	{ 	"title":"Ethiopic Layout Requirements",
		"sections": [ 
			{"title":"Justification", "url":"https://w3c.github.io/elreq/#ethiopic_justification"}
			]
		},
	{ 	"title":"Proposal to Reclassify Ethiopic Wordspace as a Space Separator (Zs) Symbol", "url":"http://www.unicode.org/L2/L2015/15148-ethiopic-wordspace.pdf",
		"sections": [ 
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Paragraph Adjustment", "url":"https://www.w3.org/TR/klreq/#paraadjust"},
			{"title":"Line Adjustment Process", "url":"https://www.w3.org/TR/klreq/#line-adjust"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Line Adjustment", "url":"https://www.w3.org/TR/jlreq/#line_adjustment"},
			{"title":"Opportunities for Inter-character Space Reduction during Line Adjustment", "url":"https://www.w3.org/TR/jlreq/#opportunities_for_intercharacter_space_reduction_during_line_adjustment"},
			{"title":"Opportunities for Inter-character Space Expansion during Line Adjustment", "url":"https://www.w3.org/TR/jlreq/#opportunities_for_intercharacter_space_expansion_during_line_adjustment"},
			{"title":"Paragraph Adjustment Rules", "url":"https://www.w3.org/TR/jlreq/#paragraph_adjustment_rules"}
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Justification", "url":"https://www.w3.org/TR/dpub-latinreq/#justification"},
			{"title":"Paragraphs and indentation", "url":"https://www.w3.org/TR/dpub-latinreq/#paragraphs-and-indentation"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Text alignment", "url":"https://w3c.github.io/mlreq/#h_textalign"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements",
		"sections": [ 
			{"title":"Justification", "url":"https://w3c.github.io/tlreq/#punctuation_marks"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Text",
		"sections": [
			{"title":"Alignment and Justification","url":"https://drafts.csswg.org/css-text-3/#justification"},
			{"title":"Edge effects","url":"https://drafts.csswg.org/css-text-3/#edge-effects"}
			]
		}
	],


"tests": [
	["CSS3 Text: text-align, text-align-last, text-justify","https://w3c.github.io/i18n-tests/results/text-align"],
	["Exploratory tests: Justification & letter-spacing","https://w3c.github.io/i18n-tests/results/exploring-justify-space"]
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#justification"],
	["Dutch","https://w3c.github.io/typography/gap-analysis/docs/latn-nl#justification"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#justification"]
	]
}             







// WORD & LETTER SPACING

spacing = {


"requirements": [
	{ 	"title":"Arabic Layout Requirements",
		"sections": [ 
			{"title":"Letter-spacing", "url":"https://w3c.github.io/alreq/#h_letterspacing"}
			]
		},
	{ 	"title":"Chinese Layout Requirements",
		"sections": [ 
			{"title":"Principles for Arranging Characters during Chinese Composition", "url":"https://w3c.github.io/clreq/#principles_of_arrangement_of_han_characters"}
			]
		},
	{ 	"title":"Indic Layout Requirements",
		"sections": [ 
			{"title":"Letter spacing", "url":"https://w3c.github.io/ilreq/#h_letter_spacing"}
			]
		},
	{ 	"title":"Khmer Layout Requirements",
		"sections": [ 
			{"title":"Letter spacing", "url":"https://w3c.github.io/sealreq/khmer/#h_spacing"}
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Writing Process for Punctuation Marks, etc.", "url":"https://www.w3.org/TR/klreq/#punc-process"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Text",
		"sections": [
			{"title":"Spacing","url":"https://drafts.csswg.org/css-text-3/#spacing"}
			]
		}
	],


"tests": [
	["Exploratory tests: Justification & letter-spacing","https://w3c.github.io/i18n-tests/results/exploring-justify-space"]
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#spacing"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#spacing"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#spacing"],
	["Dutch","https://w3c.github.io/typography/gap-analysis/docs/latn-nl#spacing"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#spacing"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#spacing"],
	["Khmer","https://w3c.github.io/sealreq/gap-analysis/khmr-gap#spacing"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#spacing"]
	]
}             







// LISTS, COUNTERS, ETC

lists = {


"requirements": [
	{ 	"title":"Ready-made counter styles", "url":"https://w3c.github.io/predefined-counter-styles/",
		"sections": [ 
			]
		},
	{ 	"title":"Bengali Layout Requirements", 
		"sections": [ 
			{"title":"Counters", "url":"https://w3c.github.io/iip/bengali/#h_counters"},
			]
		},
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Counters", "url":"https://w3c.github.io/iip/devanagari/#h_counters"},
			]
		},
	{ 	"title":"Lao script layout requirements",
		"sections": [ 
			{"title":"Counters", "url":"https://w3c.github.io/sealreq/lao/#h_counters"}
			]
		},
	{ 	"title":"Khmer Layout Requirements",
		"sections": [ 
			{"title":"List counters", "url":"https://w3c.github.io/sealreq/khmer/#h_counters"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Counters, lists, etc", "url":"https://w3c.github.io/mlreq/#h_counters"}
			]
		},
	{ 	"title":"Tamil Layout Requirements", 
		"sections": [ 
			{"title":"Counters", "url":"https://w3c.github.io/iip/tamil/#h_counters"},
			]
		},
	{ 	"title":"Thai Layout Requirements", 
		"sections": [ 
			{"title":"List counters", "url":"https://w3c.github.io/sealreq/thai/#h_counters"}
			]
		},
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":true, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Counter Styles",
		"sections": [
			{"title":"Defining Custom Counter Styles: the @counter-style rule", "url":"https://drafts.csswg.org/css-counter-styles/#the-counter-style-rule"},
			{"title":"Simple Predefined Counter Styles", "url":"https://drafts.csswg.org/css-counter-styles/#predefined-counters"},
			{"title":"Complex Predefined Counter Styles", "url":"https://drafts.csswg.org/css-counter-styles/#complex-predefined-counters"}
			]
		}
	],


"tests": [
	["CSS3 Counter Styles","https://w3c.github.io/i18n-tests/results/counter-styles"],
	["CSS3 Counter Styles, predefined styles","https://w3c.github.io/i18n-tests/results/predefined-counter-styles"],
	["Custom counter styles","https://w3c.github.io/i18n-tests/results/custom-counter-styles"]
	],


"gap_analysis": [
	["Arabic","https://w3c.github.io/alreq/gap-analysis/#counters"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#counters"],
	["Chinese","https://w3c.github.io/clreq/gap-analysis/#counters"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#counters"],
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#counters"],
	["Greek","https://w3c.github.io/typography/gap-analysis/docs/el-gap/#counters"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#counters"],
	["Japanese","https://w3c.github.io/jlreq/gap-analysis/#counters"],
	["Khmer","https://w3c.github.io/sealreq/gap-analysis/khmr-gap#counters"],
	["Lao","https://w3c.github.io/sealreq/gap-analysis/laoo-gap#counters"],
	["Mongolian","https://w3c.github.io/mlreq/gap-analysis/#counters"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#counters"]
	]
}             







// STYLING INITIALS

initials = {


"requirements": [
	{ 	"title":"Devanagari Layout Requirements", 
		"sections": [ 
			{"title":"Styling initials", "url":"https://w3c.github.io/iip/devanagari/#h_styling_initials"},
			]
		},
	{ 	"title":"Indic Layout Requirements",
		"sections": [ 
			{"title":"Initial letter styling", "url":"https://w3c.github.io/ilreq/#h_initial_letter_styling"}
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Initial Capitals", "url":"https://www.w3.org/TR/dpub-latinreq/#initial-capitals"}
			]
		}
	],


"type-info-request":true, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":true,


"spec_links": [
	{	"title":"CSS3 Selectors",
		"sections": [
			{"title":" The ::first-letter pseudo-element","url":"https://www.w3.org/TR/css3-selectors/#first-letter"}
			]
		},
	{	"title":"CSS3 Inline Layout",
		"sections": [
			{"title":" Initial Letters","url":"https://drafts.csswg.org/css-inline/#initial-letter-styling"}
			]
		}
	],


"tests": [
	["CSS3 Selectors: first-letter","https://w3c.github.io/i18n-tests/results/first-letter#latin"]
	],


"gap_analysis": [
	["Arabic","https"],
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#initialletter"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#initialletter"],
	["Dutch","https://w3c.github.io/typography/gap-analysis/docs/latn-nl#initialletter"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#initialletter"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#initialletter"]
	]
}







// BASELINES & INLINE ALIGNMENT

baselines = {


"requirements": [
	{ 	"title":"Arabic layout requirements",
		"sections": [ 
			{"title":"Multi-level baselines", "url":"https://w3c.github.io/alreq/#multi-level-baselines"},
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Baseline Grids", "url":"https://www.w3.org/TR/dpub-latinreq/#baseline-grids"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Baselines", "url":"https://w3c.github.io/mlreq/#h_baselines"}
			]
		},
	{ 	"title":"Tibetan Layout Requirements",
		"sections": [ 
			{"title":"Baseline alignment", "url":"https://w3c.github.io/tlreq/#baseline_alignment"}
			]
		}
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	{	"title":"CSS3 Writing Modes",
		"sections": [
			{"title":" Inline-level Alignment","url":"https://drafts.csswg.org/css-writing-modes-3/#inline-alignment"}
			]
		},
	{	"title":"CSS Line Grid", "url":"https://drafts.csswg.org/css-line-grid/",
		"sections": [
			]
		}
	],


"tests": [
	],


"gap_analysis": [
	["Bengali","https://w3c.github.io/iip/gap-analysis/beng-gap#baselines"],
	["Devanagari","https://w3c.github.io/iip/gap-analysis/deva-gap#baselines"],
	["Gujarati","https://w3c.github.io/iip/gap-analysis/guju-gap#baselines"],
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#baselines"],
	["Tamil","https://w3c.github.io/iip/gap-analysis/taml-gap#baselines"]
	]
}







// GENERAL PAGE LAYOUT & PROGRESSION

page_layout = {


"requirements": [
	{ 	"title":"Chinese Layout Requirements",
		"sections": [ 
			{"title":"The Type Area (or Printing Area)", "url":"http://www.w3.org/TR/clreq/#type_area"},
			{"title":"Handling of Widows and Orphans", "url":"http://www.w3.org/TR/clreq/#adjustments_of_orphans_and_widows"},
			{"title":"Headings & Page Breaks", "url":"http://www.w3.org/TR/clreq/#handling_of_headings"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Vertical Writing Mode and Horizontal Writing Mode", "url":"http://www.w3.org/TR/jlreq/#vertical_writing_mode_and_horizontal_writing_mode"},
			{"title":"Page Formats for Japanese Documents", "url":"http://www.w3.org/TR/jlreq/#page_formats_for_japanese_documents"},
			{"title":"Specifying the Kihon-hanmen", "url":"http://www.w3.org/TR/jlreq/#specifying_the_kihonhanmen"},
			{"title":"Block Direction Setting Process of Lines, Paragraphs etc.", "url":"https://www.w3.org/TR/jlreq/#block_direction_setting_process_of_lines_paragraphs"}
			]
		},
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Page layout", "url":"http://www.w3.org/TR/klreq/#page-layout"},
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Paginating Single-Column Text", "url":"http://w3c.github.io/dpub-pagination/#paginating-single-column-text"},
			{"title":"Heads", "url":"http://w3c.github.io/dpub-pagination/#heads"},
			{"title":"The Classical Rules of Hyphenation and Pagination", "url":"http://w3c.github.io/dpub-pagination/#the-classical-rules-of-hyphenation-and-pagination"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Bookbinding and the Direction of Page Turning", "url":"https://w3c.github.io/mlreq/#h_binding"},
			{"title":"Paper direction", "url":"https://w3c.github.io/mlreq/#h_paper_direction"},
			{"title":"Paper scrolling direction", "url":"https://w3c.github.io/mlreq/#h_paper_rolling_direction"},
			{"title":"The scrolling direction of scroll bars", "url":"https://w3c.github.io/mlreq/#h_scrollbag_direction"},
			{"title":"Columns", "url":"https://w3c.github.io/mlreq/#h_columns"},
			]
		},
	],


"type-info-request":false, "spec-type-issue":true, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	]
}







// GRIDS & TABLES

grids_tables = {


"requirements": [
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Tables", "url":"https://www.w3.org/TR/klreq/#tables"}
			]
		},
	{ 	"title":"Mongolian Layout Requirements",
		"sections": [ 
			{"title":"Tables", "url":"https://w3c.github.io/mlreq/#h_tables"}
			]
		},
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	]
}







// NOTES, FOOTNOTES, ETC

footnotes_etc = {  


"requirements": [
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Notes (Footnote, Endnote)", "url":"http://www.w3.org/TR/klreq/#notes"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Processing of Notes", "url":"http://www.w3.org/TR/jlreq/#processing_of_notes"}
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Footnotes", "url":"http://w3c.github.io/dpub-pagination/#footnotes"}
			]
		}
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussion":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Gurmukhi","https://w3c.github.io/iip/gap-analysis/guru-gap#notes"]
	]
}







// PAGE NUMBERING, RUNNING HEADERS, ETC

headers_footers = {  


"requirements": [
	{ 	"title":"Hangul Layout Requirements",
		"sections": [ 
			{"title":"Page Numbers", "url":"http://www.w3.org/TR/klreq/#page-number"}
			]
		},
	{ 	"title":"Japanese Layout Requirements",
		"sections": [ 
			{"title":"Running Heads and Page Numbers", "url":"http://www.w3.org/TR/jlreq/#running_heads_and_page_numbers"}
			]
		},
	{ 	"title":"Latin Layout Requirements",
		"sections": [ 
			{"title":"Running headers and footers", "url":"http://w3c.github.io/dpub-pagination/#running-headers-and-footers"}
			]
		},
	{ 	"title":"Mongolian script layout requirements",
		"sections": [ 
			{"title":"Page numbering, running headers, etc", "url":"https://w3c.github.io/mlreq/#h_page_numbering"},
			]
		},
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussions":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Ethiopic","https://w3c.github.io/elreq/gap-analysis/#pageheaders"],
	]
}







// FORMS & USER INTERACTION

interaction = {  


"requirements": [
	{ 	"title":"Mongolian Layout Requirements",
		"sections": [ 
			{"title":"User interaction", "url":"https://w3c.github.io/mlreq/#h_input"},
			{"title":"Select", "url":"https://w3c.github.io/mlreq/#select_control"},
			{"title":"Textarea", "url":"https://w3c.github.io/mlreq/#textarea_control"},
			{"title":"Label", "url":"https://w3c.github.io/mlreq/#label_control"},
			{"title":"Fieldset", "url":"https://w3c.github.io/mlreq/#fieldset_control"},
			]
		}
	],


"type-info-request":false, "spec-type-issue":false, "browser-type-bug":false, "useful-discussions":false, "samples":false,


"spec_links": [
	],


"tests": [
	],


"gap_analysis": [
	["Mongolian","https://w3c.github.io/mlreq/gap-analysis/#interaction"],
	]
}
