# GitHub Markdown to JSON parser

A lightweight web app solely built without any bundler, but `HTML`, `CSS` and `JS` while incorporating the usage of the modern approaches and APIs such as **_web components_**.

## Get started

Install [LiveServer extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and then start the server out-of-the-box with 0 configuration needed. You should be seeing that your browser opened a new tab, at `https://localhost:8080` (_default_) .

## What's in the store

App comes with a predefined _GitHub specific markdown_ text data that is rendered initially when you first load the page. The purpose of the app is to help you extract the list items that are checked and create a JSON info out of it. So go ahead and mark any list item there, by adding an `x` or `X` inside the bracket notation of a list item and notice that you're JSON information is updated in real-time as you change the content.
Notice that in order to enable content editing on the markdown section, you have to double-click first and then edit parts of the content as you wish to.

## Parser's preconditions

In order to parse the (_checked_) checkboxes/list-items, you have to have this kind of structure of your message:

```md
<section id="my-filters">
  <details id="myFirstProperty">
  <summary>Your Property's Title Here</summary>

  - [ ] firstOption
  - [ ] secondOption
  - [x] thirdOption
  </details>
</section>
```

Except for `id="my-filters"` every other other value of `id` and labels are simply placeholders, that you should replace with your correct data. If your input looks like that above, the output of that will be as:

```json
{
  "myFirstProperty": "thirdOption"
}
```

### Additional actions _(QoL)_

<em>You can do more than just parse the information. See below:</em>

<details id="actions" open>
	<summary><h4>Actions</h4></summary>

- **Copy JSON**
  _Copies the output shown there to your clipboard in a single click!_
- **Wrap**
  <em>If the content shown is long and exceeding the container, you click the `Wrapped/Not Wrapped` button to change the state between. </em>
- **Toggle `markdown content's` view state**
<em>A toggle<sup><em>switcheroo</em></sup> button with `RAW` and `HTML` states is at your disposal to switch between either modes, that transforms the given `markdown` body to either of the toggled state.</em>
</details>
