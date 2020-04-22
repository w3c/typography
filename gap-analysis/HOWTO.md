# How to contribute to a gap-analysis document

Practical steps for editing a gap-analysis document starting from a standard template.

## Describing a gap

A standard template is used for the gap-analysis documents of all groups. It is an HTML document. See, for example, the [Japanese gap-analysis document](https://w3c.github.io/jlreq/gap-analysis/).

The first 3 levels of headings in a gap-analysis document are fixed. They conform to a standardised set of categories that are used throughout the language enablement framework.  This makes tooling work, simplifies links, and provides a useful harmonisation of approach across all the groups working on language enablement.

The main content of the document is contained in small topic sections. These are authored in GitHub issues – one issue per topic, in the issue list of the group's repository.  [Here's an example](https://github.com/w3c/jlreq/issues/171) of an issue.

The content is added to the first comment field in the issue list, and some standard boilerplate text is added to the second. People can create additional comments to suggest or contribute changes. Changes to the content are made by editing the first comment (those changes can be inspected using the available pulldown in the comment header).

Item descriptions are automatically pulled into the HTML document if the right labels have been applied to the issue.  (Refresh the HTML page you should see the change immediately.) The required labels are:

1. a label beginning with `doc:` (eg. doc:beng for the Bengali gap-analysis doc). Even if the group has only one gap-analysis doc, such as for the Chinese and Japanese groups, this label should be applied (ie. `p:clreq` or `p:jlreq`, respectively)
2. the label `gap`.  Only issues with this label are parsed for inclusion in the gap-analysis doc.
3. one or more labels beginning with `i:` (for 'index'). These labels indicate which section(s) the item will be placed in, so there is a defined set of possibilities. It's fine to have more than one such label, if you think the topic is equally applicable to more than one section.
4. a label beginning with `p:`, to indicate the priority for that issue.

The paragraph in the HTML document immediately after the section title is intended to give you ideas about what you should write about. It is not an exhaustive list, by any means. You should leave that text in place. The links it contains may give you additional ideas of things to describe here – they link to currently outstanding questions or spec/browser bugs relating to this topic.

The content of a subsection should eventually contain information about what doesn't work, with the following details:
1. how the feature is broken for users (ie. what can't they do)
2. links to tests (or sometimes inline markup) or screen snaps that show the feature failing
3. a description of which applications (eg. browsers with versions) support and don't support the feature
4. pointers to the CSS or other W3C specs that relate to this feature, with descriptions of whether the gap is addressed or not
5. links to the detailed description of requirements in the lreq doc

Don't go into too much detail about how a particular feature is expected to work here – that's what the requirements document is for. The two documents are intended to support each other, not duplicate content.

If describing gaps for more than one language, and there is a difference in the level of support, make it clear which language is relevant to the text.

## Adding a priority

When the HTML file pulls in the topics, it automatically works out a priority to assign to the section containing those topics based on the labels used to assign priorities to each topic. If several topics in the same section have different priorities assigned to them, the lowest denominator wins. The possibilities are:

* `ok`
* `na` (not applicable)
* `advanced` (needs work for advanced level support)
* `basic` (needs work for basic styling support)
* `broken` (basic display issues that prevent effective use of this language on the Web)

The priority chosen will affect the colour of the block alongside the section, and add some summary text at the end of the section.

Note that this priority labelling is NOT about how badly broken the feature is – it's about how the lack of the feature affects the use of the Web in this language.  

Basic styling is the level that would be generally accepted as sufficient for most Web pages. Advanced level support would include additional features one might expect to include in ebooks or other advanced typographic formats. There may be features of a script or language that are not supported on the Web, but that are not generally regarded as necessary (usually archaic or obscure features). In this case, the feature can be described here, but the status should be marked as OK.

The decision as to what priority level is assigned to a described gap is down to the experts doing the gap analysis. It may not always be straightforward to decide.

A section can be scored as OK if the feature in question is specified in an appropriate specification, and is supported by user agents. A specification that is in CR or later and has two implementations in 'major' browsers will count. This means that the feature may not be supported in all browsers yet. (At some point in the future we may try to distinguish, visually, whether support is available in a specification but still pending in major browsers or applications.) On the other hand, you may feel it's important to have more than two major browsers supporting the feature, in which case you can assign a problem status.

If a section is given a class of `ok` or `na` you can leave the description blank, or you can add explanatory text. Whatever you prefer.  It is possible to create such content in GitHub issues, or the staff contact or group editor may prefer to quickly change the HTML directly for these sections.

## Referring to tests

The language enablement framework provides instructions for how to create two types of test.  The exploratory/interactive format is most likely to be used for gap-analysis work.  You can read how to create tests by following the links from the page [Writing i18n tests](https://github.com/w3c/i18n-tests/wiki/Writing-i18n-tests).  The gap analysis doc should summarise the detailed results indicated for the tests it refers to.

