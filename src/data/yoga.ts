import { ExerciseData } from '../types';

const RAW_YOGA = [
  ["Tadasana","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Tadasana.gif"],
  ["Vrikshasana","balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Vrikshasana.gif"],
  ["Utkatasana","lower-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Utkatasana.gif"],
  ["Trikonasana","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Trikonasana.gif"],

  ["Parsvakonasana","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Extended-Side-Angle.gif"],
  ["Ardha Chandrasana","balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Half-Moon-Pose.gif"],
  ["Garudasana","balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Eagle-Pose.gif"],
  ["Adho Mukha Shvanasana","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Downward-Facing-Dog.gif"],

  ["Virabhadrasana I","lower-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Warrior-I-Pose.gif"],
  ["Virabhadrasana II","lower-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Warrior-II-Pose.gif"],
  ["Virabhadrasana III","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Warrior-III-Pose.gif"],
  ["Urdhva Mukha Shvanasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Upward-Facing-Dog.gif"],
  
  ["Bhujangasana","back","https://fitnessprogramer.com/wp-content/uploads/2021/01/Cobra-Pose.gif"],
  ["Shalabhasana","back","https://fitnessprogramer.com/wp-content/uploads/2021/01/Locust-Pose.gif"],
  ["Dhanurasana","back","https://fitnessprogramer.com/wp-content/uploads/2021/01/Bow-Pose.gif"],
  ["Ustrasana","back","https://fitnessprogramer.com/wp-content/uploads/2021/01/Camel-Pose.gif"],

  ["Chakrasana","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Wheel-Pose.gif"],
  ["Setu Bandhasana","glutes","https://fitnessprogramer.com/wp-content/uploads/2021/01/Bridge-Pose.gif"],
  ["Matsyasana","chest","https://fitnessprogramer.com/wp-content/uploads/2021/01/Fish-Pose.gif"],
  ["Balasana","rest","https://fitnessprogramer.com/wp-content/uploads/2021/01/Childs-Pose.gif"],

  ["Paschimottanasana","hamstrings","https://fitnessprogramer.com/wp-content/uploads/2021/01/Seated-Forward-Bend.gif"],
  ["Janu Sirsasana","hamstrings","https://fitnessprogramer.com/wp-content/uploads/2021/01/Head-to-Knee-Pose.gif"],
  ["Ardha Matsyendrasana","spine","https://fitnessprogramer.com/wp-content/uploads/2021/01/Half-Lord-of-the-Fishes.gif"],
  ["Marjaryasana-Bitilasana","spine","https://fitnessprogramer.com/wp-content/uploads/2021/01/Cat-Cow-Pose.gif"],
  
  ["Gomukhasana","shoulders","https://fitnessprogramer.com/wp-content/uploads/2021/01/Cow-Face-Pose.gif"],
  ["Malasana","lower-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Yogi-Squat.gif"],
  ["Kapot asana","hips","https://fitnessprogramer.com/wp-content/uploads/2021/01/Pigeon-Pose.gif"],
  ["Bhekasana","hips","https://fitnessprogramer.com/wp-content/uploads/2021/01/Frog-Pose.gif"],

  ["Ananda Balasana","hips","https://fitnessprogramer.com/wp-content/uploads/2021/01/Happy-Baby-Pose.gif"],
  ["Supta Baddha Konasana","hips","https://fitnessprogramer.com/wp-content/uploads/2021/01/Reclining-Bound-Angle.gif"],
  ["Sukhasana","meditation","https://fitnessprogramer.com/wp-content/uploads/2021/01/Sukhasana.gif"],
  ["Padmasana","meditation","https://fitnessprogramer.com/wp-content/uploads/2021/01/Lotus-Pose.gif"],

  ["Vajrasana","meditation","https://fitnessprogramer.com/wp-content/uploads/2021/01/Vajrasana.gif"],
  ["Shavasana","rest","https://fitnessprogramer.com/wp-content/uploads/2021/01/Corpse-Pose.gif"],
  ["Simhasana","neck","https://fitnessprogramer.com/wp-content/uploads/2021/01/Lion-Pose.gif"],
  ["Phalakasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Plank-Pose.gif"],
  
  ["Chaturanga Dandasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Chaturanga.gif"],
  ["Vasisthasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Side-Plank-Pose.gif"],
  ["Naukasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Boat-Pose.gif"],
  ["Paripurna Navasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Boat-Pose.gif"],

  ["Ardha Navasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Half-Boat-Pose.gif"],
  ["Uttana Padasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Raised-Leg-Pose.gif"],
  ["Dandasana","core","https://fitnessprogramer.com/wp-content/uploads/2021/01/Staff-Pose.gif"],
  ["Kakasana","arm-balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Crow-Pose.gif"],

  ["Mayurasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Peacock-Pose.gif"],
  ["Kukkutasana","arm-balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Cockerel-Pose.gif"],
  ["Adho Mukha Vrikshasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Handstand.gif"],
  ["Pincha Mayurasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Forearm-Stand.gif"],
  
  ["Sarvangasana","upper-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Shoulder-Stand.gif"],
  ["Halasana","back","https://fitnessprogramer.com/wp-content/uploads/2021/01/Plow-Pose.gif"],
  ["Ashwa Sanchalanasana","legs","https://fitnessprogramer.com/wp-content/uploads/2021/01/Low-Lunge-Pose.gif"],
  ["Skandasana","legs","https://fitnessprogramer.com/wp-content/uploads/2021/01/Side-Lunge-Pose.gif"],

  ["Utkata Konasana","lower-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Goddess-Pose.gif"],
  ["Utthita Hasta Padangusthasana","balance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Extended-Hand-To-Toe-Pose.gif"],
  ["Surya Namaskar","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Surya-Namaskar.gif"],
  ["Hanuman Dand","full-body","https://fitnessprogramer.com/wp-content/uploads/2021/01/Hanuman-Dand.gif"],
  
  ["Surya Namaskar Fast Flow","endurance","https://fitnessprogramer.com/wp-content/uploads/2021/01/Surya-Namaskar.gif"]
];

export const YOGA: ExerciseData[] = RAW_YOGA.map(([name, bodyPart, gifUrl]) => ({
  name,
  bodyPart,
  gifUrl
}));
