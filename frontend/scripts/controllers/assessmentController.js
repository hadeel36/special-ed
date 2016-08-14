angular.module('SED.multiForms', [])
// controller for creating multi form in one view one after one
.controller('assessmentController', function assessmentController ($scope, $log, Record) {
  $scope.counter = 0;
  $scope.questionsCategories = [];
  $scope.questionsCategories = {
    social: {
      totalValue: null,
      numberOfQuestions: 16,
      questions: []
    },
    preservation: {
      totalValue: null,
      numberOfQuestions: 13,
      questions: []
    }, 
    somatoSensoryDisturbance: {
      totalValue: null,
      numberOfQuestions: 22,
      questions: []
    },
    communicationAndDevelopment: {
      totalValue: null,
      numberOfQuestions: 23,
      questions: []
    },
    attentionAndSafety: {
      totalValue: null,
      numberOfQuestions: 2,
      questions: []
    }
  };
  $scope.totalNumberOfQuestions = 76;
  var Qnum;
  $scope.questionsCategories.social.questions = [ 
                    {Q: "withdrawn, aloof, avoids contact with others, or prefers to play alone rather than with peers", value: undefined, questionNum: 1 },
                    {Q: "parallel play along side but not with peers", value: undefined, questionNum: 2 },
                    {Q: "difficulty establishing friendships", value: undefined, questionNum: 3 },
                    {Q: "limited social smile or eye contact (looks away, looks through people, looks at speaker’s mouth, needs to be prompted to make eye contact, or does not make eye contact when communicating)", value: undefined, questionNum: 4 },
                    {Q: "limited sharing and showing (e.g., does not show a toy to an adult, seek recognition, or share an experience or accomplishment with others)", value: undefined, questionNum: 5 },
                    {Q: "excessively rigid play with peers (dictates play according to his/her peculiar and repetitive interests and rules)", value: undefined, questionNum: 6 },
                    {Q: "enjoys physical or sensory play with others (e.g., tickling, chasing) but has limited reciprocal social interaction (e.g., does not play social games or games involving turn taking)", value: undefined, questionNum: 7 },
                    {Q: "self-absorbed or in own world (e.g., engages in self-stimulating behaviors, talks to self, or fantasizes excessively about things such as movies or cartoons)", value: undefined, questionNum: 8 },
                    {Q: "oblivious to the presence of others or unresponsive to the social overtures of others", value: undefined, questionNum: 9 },
                    {Q: "inappropriately talks to or hugs strangers", value: undefined, questionNum: 10 },
                    {Q: "invades personal space (gets too close to or touches others)", value: undefined, questionNum: 11 },
                    {Q: "no stranger/separation anxiety when young (not wary of strangers or upset if separated from parents)", value: undefined, questionNum: 12 },
                    {Q: "socially inappropriate, insensitive comments or behaviors (picks nose in public, asks personal uestions)", value: undefined, questionNum: 13 },
                    {Q: "does not appropriately initiate or sustain peer interaction though may interact well with adults", value: undefined, questionNum: 14 },
                    {Q: "poor social reasoning (difficulty understanding social cues/comments, facial expressions, body language)", value: undefined, questionNum: 15 },
                    {Q: "wants to have friends but does not know how to make friends", value: undefined, questionNum: 16 }
                  ];
  $scope.questionsCategories.preservation.questions = [
                    {Q:"obsessive preoccupations or extreme fixation on things such as certain movies or TV shows (reenacts or watches the same movies over and over), computer games, letters, shapes, numbers, counting, objects or topics (e.g., trains, dinosaurs, NASCAR, maps, planes, electricity, Yu-Gi-Oh, cartoon characters, etc.)",value:undefined, questionNum: 17},
                    {Q:"unusual attachment to and holding or hoarding objects (e.g., small figures, string)",value:undefined, questionNum: 18},
                    {Q:"repetitive play (e.g., excessively lines up, sorts, spins, or throws objects; opens and closes things repeatedly; plays with the same toys without variation; draws the same pictures repeatedly)",value:undefined, questionNum: 19},
                    {Q:"disinterest in toys or lack of normal and varied imaginative play",value:undefined, questionNum: 20},
                    {Q:"unusual preoccupation with parts of objects (e.g., repetitively spins wheels on a toy)",value:undefined, questionNum: 21},
                    {Q:"distressed by change (e.g., change in routine or schedule, parent takes a different car route home from school, furniture or child’s toys are moved, seasonal change in clothing)",value:undefined, questionNum: 22},
                    {Q:"difficulty with transitions (e.g., from one activity to another)",value:undefined, questionNum: 23},
                    {Q:"extreme need to finish what he/she starts",value:undefined, questionNum: 24},
                    {Q:"idiosyncratic or ritualized patterns (e.g., drinks only from a certain cup, wears only certain clothes, insists that food be arranged a certain way on a plate)",value:undefined, questionNum: 25},
                    {Q:"insists that things be in a certain location or a certain way (e.g., doors must be closed, coats zipped, etc.)",value:undefined, questionNum: 26},
                    {Q:"insists on doing things the same way every time",value:undefined, questionNum: 27},
                    {Q:"overly precise and inflexible, upset if someone breaks a “rule,” rigid and literal thinking",value:undefined, questionNum: 28},
                    {Q:"Stereotypies (unusual repetitive movements such as hand flapping when excited, toe walking, body rocking, head shaking, body tensing, teeth clenching, teeth grinding while awake, finger movements, facial grimacing, repeatedly running back and forth, twirling or spinning, pacing, playing with saliva, skin picking)",value:undefined, questionNum: 29}
                  ];
  $scope.questionsCategories.somatoSensoryDisturbance.questions = [
                    { Q: " Excessive atypical craving and love of spinning, tickling, climbing, rocking, swinging, bouncing, jumping", value: undefined, questionNum: 30 },
                    { Q: " Unresponsive at times to verbal input (not react when name called or spoken to, hearing DISTURBANCEriuestioned)", value: undefined, questionNum: 31 },
                    { Q: "unusual hypersensitivity to some sounds (e.g., distress or covering ears in response to loud noise, motors, vacuum cleaner, hair dryer, baby crying, sirens, clapping, alarms, toilet flushing, people singing)", value: undefined, questionNum: 32 },
                    { Q: "unusual hypersensitivity to smell, light, or temperature", value: undefined, questionNum: 33 },
                    { Q: "Distress with commotion or crowds (uncomfortable/anxious in large groups, theatres, cafeterias, parties)", value: undefined, questionNum: 34 },
                    { Q: " Extreme fascination with spinning or repetitive movements (e.g., revolving fans, Wheel of Fortune, running water), linear patterns (e.g., credits on TV, window blinds), minute details, lights, shiny surfaces ", value: undefined, questionNum: 35 },
                    { Q: "excessively smells, mouths, chews, licks, or rubs inanimate objects or surfaces", value: undefined, questionNum: 36 },
                    { Q: "repetitively visually scrutinizes objects or finger movements close to eyes", value: undefined, questionNum: 37 },
                    { Q: "places ears against things that vibrate or hum or presses objects against facean unusual degree", value: undefined, questionNum: 38 },
                    { Q: "Tactile defensiveness or extreme dislike of: being touched or hugged", value: undefined, questionNum: 39 },
                    { Q: "Tactile defensiveness or extreme dislike of: touching certain things or getting hands dirty or sticky", value: undefined, questionNum: 40 },
                    { Q: "Tactile defensiveness or extreme dislike of: water on self or clothes", value: undefined, questionNum: 41 },
                    { Q: "Tactile defensiveness or extreme dislike of: having face washed, teeth brushed, hair combed, or nails cut", value: undefined, questionNum: 42 },
                    { Q: "Tactile defensiveness or extreme dislike of: walking in bare feet", value: undefined, questionNum: 43 },
                    { Q: "Tactile defensiveness or extreme dislike of: clothing that is tight, seams in clothes, or certain textures of clothing", value: undefined, questionNum: 44 },
                    { Q: "High tolerance for pain (e.g., does not cry when hurt or does not respondmally to painful stimuli)", value: undefined, questionNum: 45 },
                    { Q: "Sleep disturbance (e.g., difficulty falling asleep, waking during the night, waking early in the morning)", value: undefined, questionNum: 46 },
                    { Q: "very picky eater, limited food preferences, insists on eating only a few foods", value: undefined, questionNum: 47 },
                    { Q: "hypersensitivity to textures (e.g., lumps in food)", value: undefined, questionNum: 48 },
                    { Q: "retains food in mouth without swallowing", value: undefined, questionNum: 49 },
                    { Q: "eats inedible substances", value: undefined, questionNum: 50 },
                    { Q: "other peculiar eating patterns (e.g., eats only one brand, color, or shape of a food)", value: undefined, questionNum: 51  }
                  ];

  $scope.questionsCategories.communicationAndDevelopment.questions = [
                    { Q: "Language regression or slowing at approximately 1 to 2 years of age (e.g., speaking a few words at one year but then losing speech or normal early language development and later language is delayed)", value: undefined, questionNum: 52 },
                    { Q: "Visual-motor skills (e.g., assembling puzzles, building with Legos, operating the VCR) significantly higher than language skills during the preschool years or walking at a much earlier age than talking", value: undefined, questionNum: 53 },
                    { Q: "absent or limited communicative speech but gestures to communicate (e.g., pulls an adult by the hand and leads to what wants, hands an object to an adult for assistance, brings a cup to an adult for a drink)", value: undefined, questionNum: 54 },
                    { Q: "communicates verbally with others only when stressed or needing something", value: undefined, questionNum: 55 },
                    { Q: "difficulty with reciprocal conversational speech (initiating and sustaining conversations, listening and responding to what others say), talks at people, or one-sided conversations on topics of interest to self", value: undefined, questionNum: 56 },
                    { Q: "unusual voice quality or modulation (e.g., high pitch, sing song voice, lack of intonation, etc.)", value: undefined, questionNum: 57 },
                    { Q: "screeches or makes other odd noises (e.g., growls, hums, etc.)", value: undefined, questionNum: 58 },
                    { Q: "unusual repetitive vocalizations and sounds", value: undefined, questionNum: 59 },
                    { Q: "idiosyncratic jargon as if talking in own language", value: undefined, questionNum: 60 },
                    { Q: "echolalia (inappropriately mimics what others say, such as repeating instead of answering a COMMUNICATIONuestion)", value: undefined, questionNum: 61 },
                    { Q: "sporadic speech (says a word or phrase once and rarely or never says it again)", value: undefined, questionNum: 62 },
                    { Q: "excessively recites from movies, cartoons, commercials, etc.", value: undefined, questionNum: 63 },
                    { Q: "uses rote or memorized phrases that are excessive, out of context, or not relevant ", value: undefined, questionNum: 64 },
                    { Q: "makes pronoun substitutions (e.g., says “you” when meaning “I”)", value: undefined, questionNum: 65 },
                    { Q: "excessively repetitive speech and COMMUNICATIONuestions", value: undefined, questionNum: 66 },
                    { Q: "idiosyncratic thoughts and speech (makes up words, nonsensical speech, uniCOMMUNICATIONue views and perceptions)", value: undefined, questionNum: 67 },
                    { Q: "exceptional rote memory (e.g., at an unusually young age, identifies numbers, letters, shapes, logos, and colors; sings or hums tunes; memorizes car routes; counts; recites the alphabet; reads; spells; etc.)", value: undefined, questionNum: 68 },
                    { Q: "phenomenal vocabulary or ability to memorize movies, books, or factual information", value: undefined, questionNum: 69 },
                    { Q: "remarkable ability to mimic movie or cartoon characters", value: undefined, questionNum: 70 },
                    { Q: "outstanding visual-mechanical skills (e.g., at an unusually young age, assembles puzzles, matches shapes, operates a computer or VCR, figures out how things work, complex constructions with Legos)", value: undefined, questionNum: 71 },
                    { Q: "remarkable artistic or musical talent", value: undefined, questionNum: 72 },
                    { Q: "extremely well-developed gross motor skills with delayed development in other areas (in contrast to highfunctioning children with autism who often have writing or coordination problems)", value: undefined, questionNum: 73 },
                    { Q: "Overreactivity, irritability, low frustration tolerance, agitation, tantrums, meltdowns, explosiveness, aggression, or self-injurious behavior (distressed by minor events or occurrences most children can tolerate, such as intrusions, activity interruptions, proximity, confinement, performance demands, writing tasks, or when things are not the way the child thinks they should be)", value: undefined, questionNum: 74 }
                  ];

  $scope.questionsCategories.attentionAndSafety.questions = [
                    {Q: 'Selective attention, ability to hyperfocus on activities, objects, or topics of interest to self (e.g., lines up toys, spins wheels, watches the same movie, assembles puzzles, builds with Legos, or draws pictures for long periods of time), but is inattentive, impulsive, and fidgety at other times', value: undefined, questionNum: 75},
                    {Q: 'Limited safety awareness, fearless, or oblivious to danger (e.g., unsafe climbing, wanders about house at night, runs off by self, goes into traffic or water, walks off with strangers)', value: undefined, questionNum: 76}
                  ];
  $scope.initialize = function () {
    $scope.currentQuestion = $scope.questionsCategories.social.questions[0];
    Qnum = $scope.currentQuestion.questionNum;
    $scope.currentQuestion.category = 'Social';
  };
  $scope.initialize();

  $scope.nextQuestion = function () {
    console.log(Qnum)
    if (Qnum < 16) {
      $scope.currentQuestion = $scope.questionsCategories.social.questions[Qnum];
      $scope.currentQuestion.category = 'Social';
    } else if (Qnum < 29) {
      $scope.currentQuestion = $scope.questionsCategories.preservation.questions[Qnum-16];
      $scope.currentQuestion.category = 'Preservation';
    } else if (Qnum < 51) {
      $scope.currentQuestion = $scope.questionsCategories.somatoSensoryDisturbance.questions[Qnum-29];
      $scope.currentQuestion.category = 'Sensory Disturbance';
    } else if (Qnum < 74) {
      $scope.currentQuestion = $scope.questionsCategories.communicationAndDevelopment.questions[Qnum-51];
      $scope.currentQuestion.category = 'Communication and Development';
    } else if (Qnum < 76) {
      $scope.currentQuestion = $scope.questionsCategories.attentionAndSafety.questions[Qnum-74];
      $scope.currentQuestion.category = 'Attention and Safety';
    }
    Qnum = $scope.currentQuestion.questionNum;
  };

  $scope.submit = function() {
    // $scope.finalScore.SOCIAL = $scope.result[0];
    // $scope.finalScore.PERSEVERATION = $scope.result[1];
    // $scope.finalScore.SOMATOSENSORY_DISTURBANCE = $scope.result[2];
    // $scope.finalScore.COMMUNICATION_AND_DEVELOPMENT = $scope.result[3];
    // $scope.finalScore.ATTENTION_AND_SAFETY = $scope.result[4];
    console.log('xxxxx')
    Record.submitForm($scope.finalScore)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  $scope.result = [];
  $scope.nextStep = function() {
    if ($scope.counter === $scope.allQuestions.length) {
      return $scope.result;
    }
    var temp = [];
    var num = 0;
    for (var i = 0; i < $scope.allQuestions[$scope.counter].questions.length; i++) {
      num = num + (JSON.parse($scope.allQuestions[$scope.counter].questions[i].value));
    }
    $scope.result.push(num);
    console.log($scope.result);
    $scope.allQuestions[$scope.counter].step = 0;
    $scope.counter++;
    $scope.allQuestions[$scope.counter].step = 1;
  };
});
