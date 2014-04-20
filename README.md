# identifi.js

identifi.js is an open project, which aims to make the people identification easier on pictures.

## The idea :
Basically, the idea popped out when I was browsing pictures on instagram, and I thought that it could be cool to have a such *identification* system on the web, but without a shitload of scripts and technics.

So here is the first draft.


## How it works :

The operation is simple, everything is about `data-attributes`, since its cool to use them in HTML5, I decided to <s>ab</s>use them.

### Requirements :
identifi.js needs Jquery to work (for some actions related to the DOM).

So basically, your document will look like this :
```
  <script type="text/javascrip" src="jquery.min.js"></script>
  <script type="text/javascrip" src="identifi.min.js"></script>
```
### Insert an image :
To start, pick an image, and insert it into your page :
    `<img src="path/to/my/image.png" />`

Cool ! You already achieved 75% of the operation !

### Use data-attributes :
Once your image is inserted to the document, make sure to use the proper data-attribute set, let's look into the available options :

- `data-peopleNumber="2"` -> Will declare how many person are on your image

- `data-person1x="35"` -> Will set the `x` position of the first person (ideally, target the face)
- `data-person1y="125"` -> Will set the `y` position of the first person (ideally, target the face)
- `data-person1name="Kevin"` -> The name/pseudo/anything related to the first person

- `data-person2x="258"` -> Will set the `x` position of the second person (ideally, target the face)
- `data-person2y="125"` -> Will set the `y` position of the second person (ideally, target the face)
- `data-person2name="Lucas"` -> The name/pseudo/anything related to the first person

The `x` and `y` coordonates are declared in __px__ .

So if you follow the instruction properly, your image should look like this (according to my example) :
```
<img src="path/to/my/image.png"

   data-peopleNumber="2"

   data-person1x="35"
   data-person1y="125"
   data-person1name="Kevin"

   data-person2x="258"
   data-person2y="125"
   data-person2name="Lucas"
/>
```
Now, save, and hover your picture ! Thats it !

### Thanks to :
* [@Dervondenbergen](https://github.com/dervondenbergen)

# Demo :
<p data-height="268" data-theme-id="294" data-slug-hash="iFhdz" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/LukyVj/pen/iFhdz/'>identifi.js Demo</a> by LukyVJ (<a href='http://codepen.io/LukyVj'>@LukyVj</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

On [codepen](http://cdpn.io/iFhdz)
