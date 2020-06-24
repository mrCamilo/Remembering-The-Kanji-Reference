const kanjiData = [
    {
	id: 1,
	kanji: '一',
	keyword: "one",
	heisig: "In Chinese characters, the number one is laid on its side, unlike the Roman numeral I which stands upright. As you would expect, it is written from left to right."
    },
    {
	id: 2,
	kanji: '二',
	keyword: "two",
	heisig: "Like the Roman numeral II, which reduplicates the numeral I, the kanji for two is a simple reduplication of the horizontal stroke that means one. The order of writing goes from above to below, with the first stroke slightly shorter."
    },
    {
  id: 3,
  kanji: '三',
  keyword: "three",
  heisig: "And like the Roman numeral III, which triples the numeral I, the kanji for three simply triples the single horizontal stroke. In writing it, think of 1 + 2 = 3 (一 + 二 = 三) in order to keep the middle stroke shorter."
    },
    {
  id: 4,
  kanji: '四',
  keyword: "four",
  heisig: "This character is composed of two primitive elements, mouth and human legs, both of which we will meet in the coming lessons. Assuming that you already knew how to write this kanji, we will pass over the story connected with it until later. Note how the second stroke is written left-to-right and then top-to-bottom. This is consistent with what we have already seen in the first three numbers and leads us to a general principle that will be helpful when we come to more complicated kanji later on: write north-to-south, west-to-east, northwest-to-southeast."
    },
    {
      id: 5,
      kanji: '五',
      keyword: "five",
      heisig: "As with four, we shall postpone learning the primitive elements that make up this character. Note how the general principle we just learned in the preceding frame applies to the writing of the character for five."
    },
    {
      id: 6,
      kanji: '六',
      keyword: "six",
      heisig: "The primitives here are top hat and animal legs. Once again, we glide over them until later."
    },
    {
      id: 7,
      kanji: '七',
      keyword: "seven",
      heisig: "Note that the first stroke cuts through the second. This distinguishes seven from the character for spoon (Frame 476), in which the horizontal stroke stops short."
    },
    {
      id: 8,
      kanji: '八',
      keyword: "eight",
      heisig: "Just as the Arabic numeral 8 is composed of a small circle followed by a larger one, so the kanji for eight is composed of a short line followed by a longer line, slanting towards it but not touching it. And just as the lazy 8 is the mathematical symbol for infinity, so the expanse opened up below these two strokes is associated by the Japanese with the sense of an infinite expanse or something all-encompassing."
    },
    {
      id: 9,
      kanji: '九',
      keyword: "nine",
      heisig: "If you take care to remember the stroke order of this kanji, you will not have trouble later keeping it distinct from the kanji for power."
    },
    {
      id: 10,
      kanji: '十',
      keyword: "ten",
      heisig: "Turn this character 45 degrees either way and you have the x used for the Roman numeral ten."
    },
    {
      id: 11,
      kanji: '口',
      keyword: "mouth",
      heisig: "Like several of the first characters we shall learn, the kanji for mouth is a clear pictograph. Since there are no circular shapes in the kanji, the square must be used to depict the circle."
    },
    {
      id: 12,
      kanji: '日',
      keyword: "day",
      heisig: "This kanji is intended to be a pictograph of the sun. Recalling what we said in the previous frame about round forms, it is easy to detect the circle and the big smile that characterize our simplest drawings of the sun - like those yellow badges with the words, Have a nice day!"
    },
    {
      id: 13,
      kanji: '月',
      keyword: "month",
      heisig: "This character is actually a picture of the moon, with the two horizontal lines representing the left eye and mouth of the mythical man in the moon. (Actually, the Japanese see a hare in the moon, but it is a little farfetched to find one in the kanji.) And one month, of course, is one cycle of the moon."
    },
    {
      id: 14,
      kanji: '月',
      keyword: "rice field",
      heisig: "Another pictograph, this kanji looks like a bird's-eye view of a rice field divided into four plots. Be careful when writing this character to get the order of the strokes correct. You will find that it follows perfectly the principle stated in frame 4."
    },
    {
      id: 15,
      kanji: '目',
      keyword: "eye",
      heisig: "Here again, if we round out the corners of this kanji and curve the middle strokes upwards and downwards respectively, we get something resembling an eye."
    },
    {
      id: 16,
      kanji: '古',
      keyword: "old",
      heisig: "The primitive elements that compose this character are ten and mouth, but you may find it easier to remember it as a pictograph of a tombstone with a cross on top. Just think back to one of those graveyards you have visited, or better still, used to play in as a child, with old inscriptions on the tombstones. This departure from the primitive elements in favor of a pictograph will take place now and again at these early stages, and almost never after that. So you need not worry about cluttering up your memory with too many character drawings."
    },
    {
      id: 17,
      kanji: '吾',
      keyword: "I",
      heisig: "There are actually a number of kanji for the word I, but the others tend to be more specific than this one. The key word here should be taken in the general psychological sense of the perceiving subject. Now the one place in our bodies that all five senses are concentrated in is the head, which has no less than five mouths: 2 nostrils, 2 ears, and 1 mouth. Hence, five mouths = I."
    },
    {
      id: 18,
      kanji: '冒',
      keyword: "risk",
      heisig: "Remember when you were young and your mother told you never to look directly into the sun for fear you might burn out your eyes? Probably you were foolish enough to risk a quick glance once or twice; but just as probably, you passed that bit of folk wisdom on to someone else as you grew older. Here, too, the kanji that has a sun above and an eye right below looking up at it has the meaning of risk."
    },
    {
      id: 19,
      kanji: '朋',
      keyword: "companion",
      heisig: "The first companion that God made, as the Bible story goes, was Eve. Upon seeing her, Adam exclaimed, Flesh of my flesh! And that is precisely what this character says in so many strokes."
    },
    {
      id: 20,
      kanji: '明',
      keyword: "bright",
      heisig: "Among nature's bright lights, there are two that the biblical myth has God set in the sky: the sun to rule over the day and the moon to rule the night. Each of them has come to represent one of the common connotations of this key word: the sun, the bright insight of the clear thinker, and the moon, the bright intuition of the poet and the seer."
    },
    {
      id: 21,
      kanji: '唱',
      keyword: "chant",
      heisig: "This one is easy! You have one mouth making no noise (the choirmaster) and two mouths with wagging tongues (the minimum for a chorus). So think of the key word, chant, as monastery singing and the kanji is yours forever"
    },
    {
      id: 22,
      kanji: '晶',
      keyword: "sparkle",
      heisig: "What else can the word sparkle suggest if not a diamond? And if you've ever held a diamond up to the light, you will have noticed how every facet of it becomes like a miniature sun. This kanji is a picture of a tiny sun in three places to give the sense of something that sparkles on all sides. Just like a diamond. In writing the primitive elements three times, note again how the rule for writing given in frame 4 holds true not only for the strokes in each individual element but also for the disposition of the elements in the character as a whole."
    },
    {
      id: 23,
      kanji: '品',
      keyword: 'goods',
      heisig: "As in the character for sparkle, the triplication of a single element in this character indicates everywhere or heaps of.When we think of goods in modern industrial society, we think of what has been mass-produced - that is to say, produced for the masses of open mouths waiting like fledglings in a nest to consume whatever comes their way."
    },
    {
      id: 24,
      kanji: '呂',
      keyword: 'spine',
      heisig: "This character is rather like a picture of two of the vertebrae in the spine linked by a single stroke."
    },
    {
      id: 25,
      kanji: '昌',
      keyword: 'prosperous',
      heisig: "What we mentioned in the previous two frames about 3 of something meaning everywhere or heaps of was not meant to be taken lightly. In this kanji we see two suns, one atop the other, which, if we are not careful, is easily confused in memory with the three suns of sparkle. Focus on the number this way: since we speak of prosperous times as sunny, what could be more prosperous than a sky with two suns in it? Just be sure to actually SEE them there."
    },
    {
      id: 26,
      kanji: '早',
      keyword: 'early',
      heisig: 'This kanji is actually a picture of the first flower of the day, which we shall, in defiance of botanical science, call the sunflower, since it begins with the element for sun and is held upon a stem with leaves (the pictographic representation of the final two strokes). This time, however, we shall ignore the pictograph and imagine sunflowers with needles for stems, which can be plucked and used to darn your socks. The sense of early is easily remembered if one thinks of the sunflower as the early riser in the garden, because the sun, showing favoritism towards its namesake, shines on it before all the others.'
    },
    {
      id: 27,
      kanji: "旭",
      keyword: "rising sun",
      heisig: "This character is a sort of nickname for the Japanese flag with its well-known emblem of the rising sun. If you can picture two seams running down that great red sun, and then imagine it sitting on a baseball bat for a flagpole, you have a slightly irreverent - but not altogether inaccurate - picture of how the sport has caught on in the Land of the Rising Sun."
    },
    {
      id: 28,
      kanji: '世',
      keyword: 'generation',
      heisig: "We generally consider one generation as a period of thirty (or ten plus ten plus ten) years. If you look at this kanji in its completed form - not in its stroke order - you will see three tens. When writing it, think of the lower horizontal lines as 'addition' lines written under numbers to add them up. Thus: ten 'plus' ten 'plus' ten = thirty. Actually, it's a lot easier doing it with a pencil than reading it in a book."
    },
    {
      id: 29,
      kanji: '胃',
      keyword: 'stomach',
      heisig: "You will need to refer back to frames 13 and 14 here for the special meaning of the two primitive elements that make up this character: flesh (part of the body) and brain. What the kanji says, if you look at it, is that the part of the body that keeps the brain in working order is the stomach. To keep the elements in proper order, when you write this kanji think of the brain as being held up by the flesh."
    },
    {
      id: 30,
      kanji: '旦',
      keyword: 'nightbreak',
      heisig: "While we normally refer to the start of the day as daybreak, Japanese commonly refers to it as the opening up of night into day. Hence the choice of this rather odd key word, nightbreak. The single stroke at the bottom represents the floor or the horizon over which the sun is poking its head"
    },
    {
      id: 31,
      kanji: '旦',
      keyword: 'gall bladder',
      heisig: "The pieces in this character should be easily recognizable: on the left, the element for part of the body, and on the right, the character for nightbreak, which we have just met. What all of this has to do with the gall bladder is not immediately clear. But all we need to do is give a slight twist to the traditional biblical advice about not letting the sun set on your anger (which ancient medicine associated with the choler or bile that the gall bladder is supposed to filter out), and change it to 'not letting the night break on your anger' (or your gall) - and the work of remembering the kanji is done. And the improvement is not a bad piece of advice in its own right, since anger, like so many other things, can often be calmed by letting the sun set on it and then sleeping it off."
    },
    {
      id: 32,
      kanji: '亘',
      keyword: 'span',
      heisig: "'Sunrise, sunset, sunrise, sunset...' goes the song of the Fiddler on the Roof. You can almost see the journey of the sun as it moves from one horizon (the floor) to its noonday heights in the sky overhead (ceiling) and then disappears over the other horizon - day after day, marking the span of our lives."
    },
    {
      id: 33,
      kanji: '凹',
      keyword: 'concave',
      heisig: "You couldn't have asked for a better key word for this kanji! Just have a look at it: a perfect image of a concave lens (remembering, of course, that the kanji square off rounded things), complete with its own little 'cave.' Now all you have to do is learn how to write it."
    },
    {
      id: 34,
      kanji: '凸',
      keyword: 'convex',
      heisig: "Maybe this helps you see how the Japanese have no trouble keeping convex distinct from concave. Note the odd feeling of the third stroke. If it doesn't feel all that strange now, by the time you are done with this book, it will. There are very few times you will have to write it."
    },
    {
      id: 35,
      kanji: '旧',
      keyword: 'olden times',
      heisig: "A walking stick is needed for days of olden times, since days, too, get old - at least insofar as we refer to them as the 'good old days.' The main thing here is to think of 'good old days' when you hear the key word olden times. The rest will take care of itself."
    },
    {
      id: 36,
      kanji: '自',
      keyword: 'oneself',
      heisig: "You can think of this kanji as a stylized pictograph of the nose, that little drop that Mother Nature set between your eyes. The Japanese refer to themselves by pointing a finger at their nose - giving us an easy way to remember the kanji for oneself."
    },
    {
      id: 37,
      kanji: '白',
      keyword: 'white',
      heisig: "The color white is a mixture of all the primary colors, both for pigments and for light, as we see when a prism breaks up the rays of the sun. Hence, a single drop of sun spells white."
    },
    {
      id: 38,
      kanji: '百',
      keyword: 'hundred',
      heisig: "The Japanese refer to a person's 99th birthday as a 'white year' because white is the kanji you are left with if you subtract one from a hundred."
    },
    {
      id: 39,
      kanji: '中',
      keyword: 'in',
      heisig: "The elements here are a walking stick and a mouth. Remember the trouble your mother had getting medicine in your mouth? Chances are it crossed her mind more than once to grab something handy, like your grandfather's walking stick, to pry open your jaws while she performed her duty. Keep the image of getting something in from the outside, and the otherwise abstract sense of this key word should be a lot easier than trying to spoon castor oil into a baby's mouth."
    },
    {
      id: 40,
      kanji: '千',
      keyword: 'thousand',
      heisig: "This kanji is almost too simple to pull apart, but for the sake of practice, have a look at the drop above and the ten below. Now put the elements together by thinking of squeezing two more zeros out of an eyedropper alongside the number ten to make it a thousand."
    },
    {
      id: 41,
      kanji: '舌',
      keyword: 'tongue',
      heisig: "The primitive for mouth and the character for thousand naturally form the idea of tongue if one thinks of a thousand mouths able to speak the same language, or as we say, 'sharing a common tongue.' It is easy to see the connection between the idiom and the kanji if you take its image literally: a single tongue being passed around from mouth to mouth."
    },
    {
      id: 42,
      kanji: '升',
      keyword: 'measuring box',
      heisig: "This is the character for the little wooden box that the Japanese use for measuring things, as well as for drinking saké out of. Simply imagine the outside as spiked with a thousand sharp needles, and the quaint little measuring box becomes a drinker's nightmare! Be very careful when you write this character not to confuse it with the writing of thousand. The reason for the difference gives us a chance to clarify another general principle of writing that supersedes the one we mentioned in frame 4: when a single stroke runs vertically through the middle of a character, it is written last."
    },
    {
      id: 43,
      kanji: '昇',
      keyword: 'rise up',
      heisig: "Our image here is made up of two primitive elements: a sun and a measuring box. Just as the sun can be seen rising up in the morning from - where else - the Land of the Rising Sun, this kanji has the sun rising up out of a Japanese measuring box - the 'measuring box of the rising-up sun.'"
    },
    {
      id: 44,
      kanji: '丸',
      keyword: 'round',
      heisig: "We speak of 'round numbers,' or 'rounding a number off,' meaning to add an insignificant amount to bring it to the nearest 10. For instance, if you add just a wee bit, the tiniest drop, to nine, you end up with a round number."
    },
    {
      id: 45,
      kanji: '寸',
      keyword: 'measurement',
      heisig: "This kanji actually stood for a small measurement used prior to the metric system, a bit over an inch in length, and from there acquired the sense of measurement. In the old system, it was one-tenth of a shaku (whose kanji we shall meet in frame 1151). The picture, appropriately, represents one drop of a ten (with a hook!)."
    },
    {
      id: 46,
      kanji: '肘',
      keyword: 'elbow',
      heisig: "Instead of the familiar 'grease' we usually associate with the elbow of someone hard at work, the kanji gives us a part of the body that has been glued to its task."
    },
    {
      id: 47,
      kanji: '専',
      keyword: 'speciality',
      heisig: "Ten . . . rice fields . . . glue. That is how one would read the primitive elements of this kanji from top to bottom. Now if we make a simple sentence out of these elements, we get: 'Ten rice fields glued together.' A specialty, of course, refers to one's special 'field' of endeavor or competence. In fact, few people remain content with a single specialty and usually extend themselves in other fields as well. This is how we come to get the picture of ten fields glued together to represent a specialty."
    },
    {
      id: 48,
      kanji: '博',
      keyword: 'Dr.',
      heisig: "At the left we have the needle; at the right, the kanji for specialty, plus an extra drop at the top. Think of a Dr. who is a specialist with a needle (an acupuncturist) and let the drop at the top represent the period at the end of Dr. In principle we are trying to avoid this kind of device, which plays on abstract grammatical conventions; but I think you will agree, after you have had occasion to use the right side of this kanji in forming other kanji, that the exception is merited in this case."
    },
    {
      id: 49,
      kanji: '占',
      keyword: 'fortune telling',
      heisig: "This is one of those kanji that is a real joy of simplicity: a divining rod with a mouth - which translate directly into fortune-telling. Note how the movement from top to bottom (the movement in which the kanji are written) is also the order of the elements which make up our story and of the key word itself: first divining rod, then mouth. This will not always be possible, but where it is, memory has almost no work at all to do."
    },
    {
      id: 50,
      kanji: '上',
      keyword: 'above',
      heisig: "The two directions, above and below, are usually pointed at with the finger. But the characters do not follow that custom, so we have to choose something else, easily remembered. The primitives show a magic wand standing above a floor - magically,' you might say. Anyway, go right on to the next frame, since the two belong together and are best remembered as a unit, just as the words above and below suggest each other."
    },
    {
      id: 51,
      kanji: '下',
      keyword: 'below',
      heisig: "Here we see our famous miraculous magic wand hanging, all on its own, below the ceiling, as you probably already guessed would happen. In addition to giving us two new kanji, the two shapes given in this and the preceding frame also serve to fix the use of the primitives for ceiling and floor, by drawing our attention successively to the line standing above and below the primitive element to which it is related."
    },
    {
      id: 52,
      kanji: '卓',
      keyword: 'eminent',
      heisig: "The word eminent suggests a famous or well-known person. So all you need to do - given the primitives of a magic wand and a sunflower - is to think of the world's most eminent magician as one who uses a sunflower for a magic wand (like a flower-child who goes around turning the world into peace and love)."
    },
    {
      id: 53,
      kanji: '朝',
      keyword: 'morning',
      heisig: "On the right we see the moon fading off into the first light of morning, and to the left, the mist that falls to give nature a shower to prepare it for the coming heat. If you can think of the moon tilting over to spill mist on your garden, you should have no trouble remembering which of all the elements in this story are to serve as primitives for constructing the character."
    },
    {
      id: 54,
      kanji: '嘲',
      keyword: 'derision',
      heisig: "The  bad  feeling  created  by  words  spoken  in  derision often leaves  a  bad  taste  in  the  mouth of  the  one  who  speaks  them,  kind of like the foul aftertaste that follows a night before of too much of the wrong stuff—or what we call morning mouth."
    },
    {
      id: 55,
      kanji: '只',
      keyword: 'only',
      heisig: "When we run across abstract key words like this one, the best way  to  get  an  image  it  to  recall  some  common  but  suggestive  phrase in which the word appears. For instance, we can think of the expression “it’s the only one of its kind.” Then we imagine a barker at a side-show advertising some strange pac-man like creature he has inside his tent, with only a gigantic mouth and two wee animallegs. "
    },
]

export default kanjiData
