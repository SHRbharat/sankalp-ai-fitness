import { ExerciseData } from '../types';

// Sample set of the 2000+ exercises mapping for the lookup
export const EXERCISES: ExerciseData[] = [
  { name: "One Arm Medicine Ball Slam", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2024/06/One-Arm-Medicine-Ball-Slam.gif" },
  { name: "Navy Seal Burpee", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/10/Navy-Seal-Burpee.gif" },
  { name: "Dumbbell Walking Lunge", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif" },
  { name: "Dumbbell Push Press", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Push-Press.gif" },
  { name: "Push-up", bodyPart: "chest", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/PUSH-UP.gif" },
  { name: "Pull-up", bodyPart: "back", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/PULL-UP.gif" },
  { name: "Bodyweight Squat", bodyPart: "legs", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/SQUAT.gif" },
  { name: "Plank", bodyPart: "core", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif" },
  { name: "Dumbbell Bicep Curl", bodyPart: "arms", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif" },
  { name: "Dumbbell Lateral Raise", bodyPart: "shoulders", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Lateral-Raise.gif" },
  { name: "Mountain Climber", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif" },
  { name: "Burpee", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Burpee.gif" },
];

export const YOGA: ExerciseData[] = [
  { name: "Tadasana", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Tadasana.gif" },
  { name: "Vrikshasana", bodyPart: "balance", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Vrikshasana.gif" },
  { name: "Utkatasana", bodyPart: "lower-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Utkatasana.gif" },
  { name: "Trikonasana", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Trikonasana.gif" },
  { name: "Parsvakonasana", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Extended-Side-Angle.gif" },
  { name: "Virabhadrasana I", bodyPart: "lower-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Warrior-I-Pose.gif" },
  { name: "Adho Mukha Svanasana", bodyPart: "full-body", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Downward-Facing-Dog.gif" },
];

export const ALL_DATASETS = [...EXERCISES, ...YOGA];
