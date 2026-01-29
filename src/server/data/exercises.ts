import { ExerciseData } from '../types';


// Index mapping:
// 0 -> name
// 1 -> bodyPart
// 2 -> gifUrl

const RAW_EXERCISES = [
  [
    "One Arm Medicine Ball Slam",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2024/06/One-Arm-Medicine-Ball-Slam.gif"
  ],
  [
    "Navy Seal Burpee",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Navy-Seal-Burpee.gif"
  ],
  [
    "Dumbbell Walking Lunge",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif"
  ],
  [
    "Dumbbell Push Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Push-Press.gif"
  ],
  [
    "Dumbbell Deadlift",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-deadlifts.gif"
  ],
  [
    "Dumbbell Sumo Deadlift",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-sumo-deadlift.gif"
  ],
  [
    "Backward Medicine Ball Throw",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/05/Backward-Medicine-Ball-Throw.gif"
  ],
  [
    "Zercher Carry",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/zercher-carry.gif"
  ],
  [
    "Wall Walk",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/wall-walk-muscles.gif"
  ],
  [
    "Kettlebell Hang Clean",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Kettlebell-Hang-Clean.gif"
  ],
  [
    "Dumbbell Power Clean",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Power-Clean.gif"
  ],
  [
    "Dumbbell Devil Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Devil-Press.gif"
  ],
  [
    "Overhead Squat",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/overhead-squat.gif"
  ],
  [
    "Ski Ergometer",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Ski-Ergometer.gif"
  ],
  [
    "Human Flag",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Human-Flag.gif"
  ],
  [
    "Farmer's Walk",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif"
  ],
  [
    "Log Lift",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Log-Lift.gif"
  ],
  [
    "Tire Sledge Hammer",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Tire-SledgeHammer.gif"
  ],
  [
    "Tire Flip",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/StrongMan-Tire-Flip.gif"
  ],
  [
    "Barbell Snatch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Snatch.gif"
  ],
  [
    "Power Snatch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Power-Snatch.gif"
  ],
  [
    "Muscle Snatch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Muscle-Snatch.gif"
  ],
  [
    "Heaving Snatch Balance",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Heaving-Snatch-Balance.gif"
  ],
  [
    "Barbell Hang Clean",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Barbell-Hang-Clean.gif"
  ],
  [
    "Rowing Machine",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif"
  ],
  [
    "Barbell Bent Over Row",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif"
  ],
  [
    "Legless Rope Climb",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Rope-Climb.gif"
  ],
  [
    "Push-up Toe Touch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Push-up-Toe-Touch.gif"
  ],
  [
    "Bent Over Dumbbell Row",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif"
  ],
  [
    "Muscle-Up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Muscle-up-vertical-bar.gif"
  ],
  [
    "Push Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/push-press-1.gif"
  ],
  [
    "Landmine Squat to Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Landmine-Press.gif"
  ],
  [
    "Barbell Clean and Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Clean-and-Press-.gif"
  ],
  [
    "Power Clean",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Power-Clean-.gif"
  ],
  [
    "Turkish Get-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Turkish-Get-Up-Squat-style.gif"
  ],
  [
    "Kettlebell Swings",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif"
  ],
  [
    "One Arm Kettlebell Snatch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/One-Arm-Kettlebell-Snatch-exercise.gif"
  ],
  [
    "Impossible Dips",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Impossible-Dips.gif"
  ],
  [
    "Korean Dips",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Korean-Dips.gif"
  ],
  [
    "Straight Bar Dip",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Straight-Bar-Dip.gif"
  ],
  [
    "Kettlebell Clean and Jerk",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Kettlebell-Clean-and-Jerk.gif"
  ],
  [
    "Dumbbell Burpees",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Burpees.gif"
  ],
  [
    "Dumbbell Jump Squat",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dumbbell-Jump-Squat.gif"
  ],
  [
    "Burpees",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/burpees.gif"
  ],
  [
    "L-Sit Pull-Up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/L-Pull-Up.gif"
  ],
  [
    "Back Lever",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Back-Lever.gif"
  ],
  [
    "Front Lever Pull-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Front-Lever-Pull-up.gif"
  ],
  [
    "One Arm Dumbbell Snatch",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/One-Arm-Dumbbell-Snatch.gif"
  ],
  [
    "Archer Pull-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Archer-Pull-up.gif"
  ],
  [
    "Cross Body Push-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cross-Body-Push-up_Plyometric.gif"
  ],
  [
    "Trap Bar Jump Squat",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/trap-bar-jump-squat.gif"
  ],
  [
    "Medicine Ball-Sit-up Throw",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Medicine-Ball-Sit-up-Throw.gif"
  ],
  [
    "Barbell Jump Squat",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Barbell-Jump-Squat.gif"
  ],
  [
    "Handstand Walk",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/handstand-walk.gif"
  ],
  [
    "Handstand",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/handstand-holds.gif"
  ],
  [
    "Kettlebell Clean and Press",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Kettlebell-Clean-and-Press.gif"
  ],
  [
    "Climbing Monkey Bars",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Climbing-Monkey-Bars.gif"
  ],
  [
    "Kipping Handstand Push-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/kipping-handstand-push-up.gif"
  ],
  [
    "Snap Jumps",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/SNAP-JUMPS.gif"
  ],
  [
    "Barbell Thruster",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/thruster.gif"
  ],
  [
    "Bodyweight Skull Crushers",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Bodyweight-Skull-Crushers.gif"
  ],
  [
    "Straddle Planche",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Straddle-planche.gif"
  ],
  [
    "One Arm Kettlebell Swing",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/One-Arm-Kettlebell-Swing.gif"
  ],
  [
    "Medicine ball Overhead Slam",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Medicine-ball-Overhead-Slam-exercise.gif"
  ],
  [
    "Wall Ball",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/wall-ball.gif"
  ],
  [
    "Kettlebell Renegade Row",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Kettlebell-Renegade-Row.gif"
  ],
  [
    "Push-Up to Renegade Row",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Push-Up-to-Renegade-Row.gif"
  ],
  [
    "Modified Hindu Push-up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Modified-Hindu-Push-up.gif"
  ],
  [
    "Planche Push-Up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Planche-Push-Up.gif"
  ],
  [
    "Archer Push-Up",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif"
  ],
  [
    "Kettlebell Figure 8",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Kettlebell-Figure-8.gif"
  ],
  [
    "Dumbbell Renegade Row",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2021/01/dumbbell-renegade-row-1.gif"
  ],
  [
    "Dumbbell Iron Cross",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Iron-Cross.gif"
  ],
  [
    "Ring Dips",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Ring-Dips.gif"
  ],
  [
    "Battle Rope",
    "full-body",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/Battle-Rope.gif"
  ],
  [
    "Weighted Lateral Neck Flexion",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Weighted-Lateral-Neck-Flexion.gif"
  ],
  [
    "Weighted Lying Neck Extension",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Weighted-Lying-Neck-Extension.gif"
  ],
  [
    "Weighted Lying Neck Flexion",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Weighted-Lying-Neck-Flexion.gif"
  ],
  [
    "Gittleson Shrug",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Seated-Gittleson-Shrug.gif"
  ],
  [
    "Diagonal Neck Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Diagonal-Neck-Stretch-360x360.png"
  ],
  [
    "Neck Rotation Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Rotating-Neck-Stretch.gif"
  ],
  [
    "Neck Flexion Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Neck-Flexion-Stretch-360x360.png"
  ],
  [
    "Neck Extension Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Neck-Extension-Stretching-360x360.png"
  ],
  [
    "Side Neck Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Side-Neck-Stretch.gif"
  ],
  [
    "Side Push Neck Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Side-Push-Neck-Stretch.gif"
  ],
  [
    "Front and Back Neck Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Front-and-Back-Neck-Stretch.gif"
  ],
  [
    "Chin Tuck",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Chin-Tuck.gif"
  ],
  [
    "Prone Cervical Extension",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Prone-Cervical-Extension.gif"
  ],
  [
    "Kneeling Neck Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Neck-Stretch.gif"
  ],
  [
    "Weighted Neck Harness Extension",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Weighted-Neck-Harness-Extension.gif"
  ],
  [
    "Lying Weighted Neck Flexion",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Weighted-Neck-Flexion.gif"
  ],
  [
    "Lying Weighted Neck Extension",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Weighted-Neck-Extension.gif"
  ],
  [
    "Lever Neck Right Side Flexion (plate loaded)",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lever-Neck-Right-Side-Flexion-plate-loaded.gif"
  ],
  [
    "Lever Neck Extension (plate loaded)",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lever-Neck-Extension-plate-loaded.gif"
  ],
  [
    "Cable Seated Neck Flexion with head harness",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Seated-Neck-Flexion-with-head-harness.gif"
  ],
  [
    "Cable Seated Neck Extension with head harness",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Seated-Neck-Extension-with-head-harness.gif"
  ],
  [
    "Sphinx Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Sphinx-Stretch.gif"
  ],
  [
    "Floor Hyperextension",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Floor-Hyperextension-1.gif"
  ],
  [
    "Bhujangasana | Cobra Abdominal Stretch",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/abdominal-stretch.gif"
  ],
  [
    "Fish Pose",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Fish-Pose-Matsyasana.gif"
  ],
  [
    "Superman",
    "neck",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman-exercise.gif"
  ],
  [
    "Overhead Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/overhead-shrug.gif"
  ],
  [
    "Gittleson Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Seated-Gittleson-Shrug.gif"
  ],
  [
    "45 Degree Incline Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/45-Degree-Incline-Row.gif"
  ],
  [
    "Dumbbell Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Shrug.gif"
  ],
  [
    "Cable Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Shrug.gif"
  ],
  [
    "Barbell Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shrug.gif"
  ],
  [
    "Behind The Back Barbell Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2023/03/Behind-The-Back-Barbell-Shrug-Reverse-Barbell-Shrug.gif"
  ],
  [
    "Dumbbell Incline Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Incline-Shrug.gif"
  ],
  [
    "Prone Incline Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Decline-Shrug.gif"
  ],
  [
    "Lever Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shrug.gif"
  ],
  [
    "Rear Delt Fly Machine",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif"
  ],
  [
    "Lever Gripless Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Gripless-Shrug.gif"
  ],
  [
    "Cable Rear Delt Fly",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/cable-rear-delt-fly.gif"
  ],
  [
    "Bent Over Lateral Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Lateral-Raise.gif"
  ],
  [
    "Cable Upright Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Upright-Row.gif"
  ],
  [
    "Face Pull",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif"
  ],
  [
    "Half Kneeling High Cable Row Rope",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Half-Kneeling-High-Cable-Row-Rope.gif"
  ],
  [
    "Dumbbell Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Raise.gif"
  ],
  [
    "Dumbbell Upright Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Upright-Row.gif"
  ],
  [
    "Bodyweight Military Press",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Bodyweight-Military-Press.gif"
  ],
  [
    "Kneeling High Pulley Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-High-Pulley-Row.gif"
  ],
  [
    "Ez Bar Upright Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif"
  ],
  [
    "Band Pull-Apart",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Band-pull-apart.gif"
  ],
  [
    "Bent Over Reverse Cable Fly",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/bent-over-reverse-cable-fly.gif"
  ],
  [
    "Bent-Over Barbell Reverse Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Bent-Over-Barbell-Reverse-Raise.gif"
  ],
  [
    "Barbell Rear Delt Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Rear-Delt-Raise.gif"
  ],
  [
    "Smith Machine Shrug",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/smith-machine-shrug.gif"
  ],
  [
    "Incline Dumbbell Reverse Fly",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Fly.gif"
  ],
  [
    "Incline Dumbbell Y-Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Incline-Dumbbell-Y-Raise.gif"
  ],
  [
    "Dumbbell Incline T-Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Incline-T-Raise.gif"
  ],
  [
    "Swimming",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Swimming.gif"
  ],
  [
    "Bent Over Rear Delt Fly | Gymstick",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Bent-Over-Rear-Delt-Fly-Gymstick.gif"
  ],
  [
    "Scapular Protraction and Retraction",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Scapular-Protraction-and-Retraction.gif"
  ],
  [
    "Cross Cable Face Pull",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Cross-Cable-Face-Pull.gif"
  ],
  [
    "Elbow Reverse Push-Up",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Elbow-Reverse-Push-Up.gif"
  ],
  [
    "Scapula Dips",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Scapula-Dips.gif"
  ],
  [
    "Push-Up Plus",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif"
  ],
  [
    "Seated Ballerina Exercise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Ballerina.gif"
  ],
  [
    "Seated Scapular Retraction Exercise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Scapular-Retraction-Exercise.gif"
  ],
  [
    "Foam Roller Rhomboids",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Rhomboids.gif"
  ],
  [
    "Foam Roller Upper Back",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Upper-Back.gif"
  ],
  [
    "Scapula Pull-up",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Scapula-Pull-up.gif"
  ],
  [
    "Serratus Wall Slide With Foam Roller",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Serratus-Wall-Slide-With-Foam-Roller.gif"
  ],
  [
    "Dip Shrugs (Serratus Shrugs)",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dip-Shrugs.gif"
  ],
  [
    "Wide Grip Barbell Bent Over Row Plus",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Wide-Grip-Barbell-Bent-Over-Row-Plus.gif"
  ],
  [
    "Wide Grip Alternate Barbell Bent Over Row Plus",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Wide-Grip-Alternate-Barbell-Bent-Over-Row-Plus.gif"
  ],
  [
    "One-Arm Dumbbell Upright Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/One-Arm-Dumbbell-Upright-Row.gif"
  ],
  [
    "Cable Y Raise",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/cable-y-raise.gif"
  ],
  [
    "Barbell Upright Row",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/barbell-uprightrow.gif"
  ],
  [
    "Resistance Band Bent Over Rear Delt Fly",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Resistance-Band-Bent-Over-Rear-Delt-Fly.gif"
  ],
  [
    "Resistance Band Pull Apart",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Resistance-Band-Pull-Apart.gif"
  ],
  [
    "Single Arm Upright Row | Gymstick",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Single-Arm-Upright-Row.gif"
  ],
  [
    "Face Pull With Resistance Band",
    "trapezius",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Face-pull.gif"
  ],
  [
    "One Arm Medicine Ball Slam",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2024/06/One-Arm-Medicine-Ball-Slam.gif"
  ],
  [
    "Seated Barbell Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif"
  ],
  [
    "Medicine Ball Overhead Throw",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Medicine-Ball-Overhead-Throw.gif"
  ],
  [
    "Dumbbell Push Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Push-Press.gif"
  ],
  [
    "Standing Dumbbell Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Standing-Dumbbell-Overhead-Press.gif"
  ],
  [
    "Arm Scissors",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Arm-Scissors.gif"
  ],
  [
    "Side Arm Raises",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/arm-circles.gif"
  ],
  [
    "Arm Circles",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif"
  ],
  [
    "Dumbbell Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif"
  ],
  [
    "Dumbbell Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif"
  ],
  [
    "Smith Machine Behind Neck Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Behind-Neck-Press.gif"
  ],
  [
    "Smith Machine Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif"
  ],
  [
    "Cable Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif"
  ],
  [
    "45 Degree Incline Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/45-Degree-Incline-Row.gif"
  ],
  [
    "Lever Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif"
  ],
  [
    "Standing Close Grip Military Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Standing-Barbell-Close-Grip-Military-Press.gif"
  ],
  [
    "Barbell Military Press (Overhead press)",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif"
  ],
  [
    "Dumbbell Chest Supported Lateral Raises",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Chest-Supported-Lateral-Raises.gif"
  ],
  [
    "Dumbbell 6 Way Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-6-Ways-Raise.gif"
  ],
  [
    "Dumbbell 4 Way Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-4-Ways-Lateral-Raise.gif"
  ],
  [
    "Alternating Dumbbell Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif"
  ],
  [
    "Two Arm Cable Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Cable-Front-Raise.gif"
  ],
  [
    "Two Arm Dumbbell Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Dumbbell-Front-Raise.gif"
  ],
  [
    "Dumbbell Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif"
  ],
  [
    "Cable Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Front-Raise.gif"
  ],
  [
    "Leaning Single Arm Dumbbell Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Leaning-Single-Arm-Dumbbell-Lateral-Raise.gif"
  ],
  [
    "Seated Behind Neck Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Behind-the-Neck-Press.gif"
  ],
  [
    "Rear Delt Fly Machine",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif"
  ],
  [
    "Seated Rear Lateral Dumbbell Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Rear-Lateral-Dumbbell-Raise.gif"
  ],
  [
    "Half Arnold Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Half-Arnold-Press.gif"
  ],
  [
    "Arnold Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif"
  ],
  [
    "Seated Dumbbell Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Dumbbell-Lateral-Raise.gif"
  ],
  [
    "Cable Rear Delt Fly",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/cable-rear-delt-fly.gif"
  ],
  [
    "Bent Over Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Lateral-Raise.gif"
  ],
  [
    "Bent Arm Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Bent-Arm-Laterl-Raise.gif"
  ],
  [
    "Cable Upright Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Upright-Row.gif"
  ],
  [
    "Face Pull",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif"
  ],
  [
    "Half Kneeling High Cable Row Rope",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Half-Kneeling-High-Cable-Row-Rope.gif"
  ],
  [
    "Leaning Cable Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Leaning-Cable-Lateral-Raise.gif"
  ],
  [
    "Dumbbell Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Raise.gif"
  ],
  [
    "Dumbbell Upright Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Upright-Row.gif"
  ],
  [
    "Bodyweight Military Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Bodyweight-Military-Press.gif"
  ],
  [
    "Push Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/push-press-1.gif"
  ],
  [
    "Ez Bar Upright Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif"
  ],
  [
    "Dumbbell Lying One-Arm Rear Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Lying-One-Arm-Rear-Lateral-Raise.gif"
  ],
  [
    "Lateral Raise Machine",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lateral-Raise-Machine.gif"
  ],
  [
    "Scott Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/scott-press.gif"
  ],
  [
    "Band Pull-Apart",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Band-pull-apart.gif"
  ],
  [
    "Bent Over Reverse Cable Fly",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/bent-over-reverse-cable-fly.gif"
  ],
  [
    "Bent-Over Barbell Reverse Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Bent-Over-Barbell-Reverse-Raise.gif"
  ],
  [
    "Weighted Round Arm",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/weighted-round-arm.gif"
  ],
  [
    "Weight Plate Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weight-Plate-Front-Raise-1.gif"
  ],
  [
    "Two Arm Cable Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Two-Arm-Cable-Lateral-Raise.gif"
  ],
  [
    "Landmine Squat to Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Landmine-Press.gif"
  ],
  [
    "Cable Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Shoulder-Press.gif"
  ],
  [
    "Barbell Rear Delt Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Rear-Delt-Raise.gif"
  ],
  [
    "Double Cable Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Double-Cable-Front-Raise.gif"
  ],
  [
    "Standing Smith Machine Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Smith-Machine-Shoulder-Press.gif"
  ],
  [
    "Dumbbell W Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-W-Press.gif"
  ],
  [
    "Dumbbell One Arm Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-One-Arm-Shoulder-Press.gif"
  ],
  [
    "Dumbbell Scaption",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Scaption.gif"
  ],
  [
    "Barbell Clean and Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Clean-and-Press-.gif"
  ],
  [
    "Dumbbell Cuban Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/dumbbell-cuban-press-.gif"
  ],
  [
    "Dumbbell Cuban External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Cuban-External-Rotation.gif"
  ],
  [
    "Standing Alternating Dumbbell Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Alternating-Dumbbell-Shoulder-Press.gif"
  ],
  [
    "Cable External Shoulder Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-External-Shoulder-Rotation.gif"
  ],
  [
    "Cable Internal Shoulder Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Internal-Shoulder-Rotation.gif"
  ],
  [
    "Across Chest Shoulder Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Across-Chest-Shoulder-Stretch.gif"
  ],
  [
    "Standing Reach Up Back rotation Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Standing-Reach-Up-Back-rotation-Stretch.gif"
  ],
  [
    "Shoulder Stretch Behind Back",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Shoulder-Stretch-Behind-Back.gif"
  ],
  [
    "Incline Dumbbell Side Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Dumbbell-Side-Lateral-Raise.gif"
  ],
  [
    "Dumbbell Side Lying Rear Delt Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Side-Lying-Rear-Delt-Raise.gif"
  ],
  [
    "Lying Cable Reverse Fly",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lying-Cable-Reverse-Fly.gif"
  ],
  [
    "Single Arm Circles",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Single-Arm-Circles.gif"
  ],
  [
    "Dumbbell Lateral to Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Lateral-to-Front-Raise.gif"
  ],
  [
    "One-Arm Bent Over Cable Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/One-Arm-Bent-Over-Cable-Lateral-Raise.gif"
  ],
  [
    "Handstand Push-Up",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/handstand-push-up.gif"
  ],
  [
    "EZ Bar Underhand Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/EZ-Bar-Underhand-Press.gif"
  ],
  [
    "Dumbbell Lying External Shoulder Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Lying-External-Shoulder-Rotation.gif"
  ],
  [
    "Incline Dumbbell Reverse Fly",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Fly.gif"
  ],
  [
    "Incline Dumbbell Y-Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Incline-Dumbbell-Y-Raise.gif"
  ],
  [
    "Dumbbell Incline T-Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Incline-T-Raise.gif"
  ],
  [
    "Bench Supported Dumbbell External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Supported-Dumbbell-External-Rotation.gif"
  ],
  [
    "Dumbbell Seated Bent Over Rear Delt Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Seated-Bent-Over-Rear-Delt-Row.gif"
  ],
  [
    "Dumbbell Standing Palms In Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Standing-Palms-In-Press.gif"
  ],
  [
    "Lying Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lying-Shoulder-Press.gif"
  ],
  [
    "Dumbbell Rear Delt Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Rear-Delt-Row.gif"
  ],
  [
    "Lever Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Lateral-Raise.gif"
  ],
  [
    "Kettlebell One-Arm Military Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-One-Arm-Military-Press.gif"
  ],
  [
    "Kettlebell Split Snatch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Split-Snatch.gif"
  ],
  [
    "Kettlebell Windmill",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Windmill.gif"
  ],
  [
    "Kettlebell Swings",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif"
  ],
  [
    "Kettlebell Arnold Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Arnold-Press.gif"
  ],
  [
    "Bent Over Rear Delt Fly | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Bent-Over-Rear-Delt-Fly-Gymstick.gif"
  ],
  [
    "Cable Seated Shoulder Internal Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Cable-Seated-Shoulder-Internal-Rotation.gif"
  ],
  [
    "Half Kneeling Cable External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Half-Kneeling-Cable-External-Rotation.gif"
  ],
  [
    "Landmine Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Landmine-Lateral-Raise.gif"
  ],
  [
    "Seated Dumbbell Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/seated-dumbbell-front-raise.gif"
  ],
  [
    "Scapular Protraction and Retraction",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Scapular-Protraction-and-Retraction.gif"
  ],
  [
    "One Arm Kettlebell Snatch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/One-Arm-Kettlebell-Snatch-exercise.gif"
  ],
  [
    "Cross Cable Face Pull",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Cross-Cable-Face-Pull.gif"
  ],
  [
    "One Arm Landmine Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/One-Arm-Landmine-Row.gif"
  ],
  [
    "Resistance Band Seated Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Resistance-Band-Seated-Shoulder-Press.gif"
  ],
  [
    "Bench Pike Push-up",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Bench-Pike-Push-up.gif"
  ],
  [
    "Pike Push-up",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Pike-Push-up.gif"
  ],
  [
    "Tall Kneeling One Arm Kettlebell Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Half-Kneeling-One-Arm-Kettlebell-Press.gif"
  ],
  [
    "Kettlebell Clean and Jerk",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Kettlebell-Clean-and-Jerk.gif"
  ],
  [
    "Full Range Of Motion Lat Pulldown",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Full-Range-Of-Motion-Lat-Pulldown.gif"
  ],
  [
    "Lever Shoulder Press (Hammer Grip)",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lever-Shoulder-Press-Hammer-Grip.gif"
  ],
  [
    "Dumbbell Lying Rear Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/03/Dumbbell-Lying-Rear-Lateral-Raise.gif"
  ],
  [
    "Lever Reverse Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Reverse-Shoulder-Press.gif"
  ],
  [
    "Side Lying Rear Delt Dumbbell Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Side-Lying-Rear-Delt-Dumbbell-Raise.gif"
  ],
  [
    "Scapula Dips",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Scapula-Dips.gif"
  ],
  [
    "Ez-Bar Incline Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Incline-Front-Raise.gif"
  ],
  [
    "Back Lever",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Back-Lever.gif"
  ],
  [
    "Barbell Front Raise Twist",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Barbell-Front-Raise-Twist.gif"
  ],
  [
    "Kettlebell Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/11/Kettlebell-Shoulder-Press.gif"
  ],
  [
    "Wall-Supported Handstand Push-Ups",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/wall-supported-handstand-push-up.gif"
  ],
  [
    "Towel Shoulder Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Stretch-With-Towel.gif"
  ],
  [
    "Kettlebell Thruster",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Kettlebell-Thruster.gif"
  ],
  [
    "One Arm Dumbbell Snatch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/One-Arm-Dumbbell-Snatch.gif"
  ],
  [
    "Band Front Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Band-Front-Lateral-Raise.gif"
  ],
  [
    "Shoulder Pendulum",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/pendulum.gif"
  ],
  [
    "90-Degree Cable External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/90-Degree-Cable-External-Rotation-.gif"
  ],
  [
    "90-degree Cable Internal Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Cable-Shoulder-90-degrees-Internal-Rotation.gif"
  ],
  [
    "Seated Ballerina Exercise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Ballerina.gif"
  ],
  [
    "Seated Scapular Retraction Exercise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Scapular-Retraction-Exercise.gif"
  ],
  [
    "Foam Roller Posterior Shoulder",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Posterior-Shoulder.gif"
  ],
  [
    "Foam Roller Front Shoulder and Chest",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Front-Shoulder-and-Chest-Lying-on-Floor.gif"
  ],
  [
    "Rotator Cuff Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Rotator-Cuff-Stretch.gif"
  ],
  [
    "Assisted Reverse Stretch (Chest And Shoulder)",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Reverse-Shoulder-Stretch.gif"
  ],
  [
    "Lying Upper Body Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Upper-Body-Rotation.gif"
  ],
  [
    "Kneeling Back Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Back-Rotation-Stretch.gif"
  ],
  [
    "Serratus Wall Slide With Foam Roller",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Serratus-Wall-Slide-With-Foam-Roller.gif"
  ],
  [
    "Wall Supported Arm Raises",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Wall-Supported-Arm-Raises.gif"
  ],
  [
    "Backhand Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Backhand-Raise.gif"
  ],
  [
    "Dumbbell Seated Cuban Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Seated-Cuban-Press.gif"
  ],
  [
    "Kneeling Cable Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Cable-Shoulder-Press.gif"
  ],
  [
    "Wall Slides",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/wall-slide.gif"
  ],
  [
    "Kneeling T-spine Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Kneeling-T-spine-Rotation.gif"
  ],
  [
    "Plate Loaded Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Plate-Loaded-Shoulder-Press.gif"
  ],
  [
    "Chest Supported Dumbbell Front Raises",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chest-Supported-Dumbbell-Front-Raises.gif"
  ],
  [
    "One-Arm Dumbbell Upright Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/One-Arm-Dumbbell-Upright-Row.gif"
  ],
  [
    "Single Arm Arnold Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Single-Arm-Arnold-Press.gif"
  ],
  [
    "Kneeling Landmine Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Kneeling-Landmine-Press.gif"
  ],
  [
    "Pike Push-Up Between Chairs",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Pike-Push-Up-Between-Chairs.gif"
  ],
  [
    "Kettlebell Clean and Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Kettlebell-Clean-and-Press.gif"
  ],
  [
    "Dumbbell Z Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Dumbbell-Z-Press.gif"
  ],
  [
    "Cable Y Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/cable-y-raise.gif"
  ],
  [
    "Alternate Dumbbell Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Alternate-Dumbbell-Lateral-Raise.gif"
  ],
  [
    "Back Slaps Wrap Around Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Back-Slaps-Wrap-Around-Stretch.gif"
  ],
  [
    "Reaction Ball Throw",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/08/Reaction-Ball-Throw-Agility-Ball-Drill-.gif"
  ],
  [
    "Front Rack PVC Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/PVC-Front-Rack-Stretch.gif"
  ],
  [
    "Lever High Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Lever-High-Row.gif"
  ],
  [
    "Cable Half Kneeling Pallof Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Half-Kneeling-Pallof-Press.gif"
  ],
  [
    "Chest and Front of Shoulder Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chest-and-Front-of-Shoulder-Stretch.gif"
  ],
  [
    "Shoulder External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/shoulder-external-rotation-stretch.gif"
  ],
  [
    "Shoulder Internal Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/shoulder-internal-rotation-stretch.gif"
  ],
  [
    "Lateral Raise with Towel on Wall",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Lateral-Raise-with-Towel-on-Wall.gif"
  ],
  [
    "Alternating Shoulder Flexion",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Back-to-Wall-Alternating-Shoulder-Flexion.gif"
  ],
  [
    "Banded Shoulder External Rotation",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-External-Rotation.gif"
  ],
  [
    "Banded Shoulder Flexion",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-Flexion.gif"
  ],
  [
    "Banded Shoulder Extension",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-Extension.gif"
  ],
  [
    "Band Single Arm Shoulder Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Single-Arm-Shoulder-Press.gif"
  ],
  [
    "Handstand Push-ups Between Benches",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/Handstand-Push-ups-Between-Benches.gif"
  ],
  [
    "Kipping Handstand Push-up",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/kipping-handstand-push-up.gif"
  ],
  [
    "Bent-Over Dumbbell Rear Delt Raise With Head On Bench",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Rear-Delt-Raise-With-Head-On-Bench.gif"
  ],
  [
    "Hindu Push-ups",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pike-to-Cobra.gif"
  ],
  [
    "Barbell Upright Row",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/barbell-uprightrow.gif"
  ],
  [
    "Barbell Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Front-Raise.gif"
  ],
  [
    "Corner Wall Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Corner-Wall-Stretch.gif"
  ],
  [
    "Barbell Thruster",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/thruster.gif"
  ],
  [
    "One Arm Kettlebell Swing",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/One-Arm-Kettlebell-Swing.gif"
  ],
  [
    "Standing Reverse Shoulder Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Standing-Reverse-Shoulder-Stretch.gif"
  ],
  [
    "Resistance Band Bent Over Rear Delt Fly",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Resistance-Band-Bent-Over-Rear-Delt-Fly.gif"
  ],
  [
    "Medicine ball Overhead Slam",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Medicine-ball-Overhead-Slam-exercise.gif"
  ],
  [
    "Doorway Pec and Shoulder Stretch",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2021/01/Doorway-chest-and-sshoulder-stretch.gif"
  ],
  [
    "Wall Ball",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/wall-ball.gif"
  ],
  [
    "Resistance Band Pull Apart",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Resistance-Band-Pull-Apart.gif"
  ],
  [
    "Kettlebell Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Kettlebell-Lateral-Raise.gif"
  ],
  [
    "Dumbbell Windmill",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Windmill.gif"
  ],
  [
    "Dumbbell Iron Cross",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Iron-Cross.gif"
  ],
  [
    "Incline Landmine Press",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Incline-Landmine-Press.gif"
  ],
  [
    "Dumbbell Single Arm Lateral Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Dumbbell-Single-Arm-Lateral-Raise.gif"
  ],
  [
    "Dumbbell Seated Alternate Front Raise",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Dumbbell-Seated-Alternate-Front-Raises.gif"
  ],
  [
    "Swing | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Swing-Gymstick.gif"
  ],
  [
    "Side Bend Press | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Side-Bend-Press.gif"
  ],
  [
    "Single Arm Upright Row | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Single-Arm-Upright-Row.gif"
  ],
  [
    "Behind the Head Military Press | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Behind-Head-Military-Press.gif"
  ],
  [
    "Skier | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Skier-Gymstick.gif"
  ],
  [
    "Face Pull With Resistance Band",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Face-pull.gif"
  ],
  [
    "Bent Over Row | Gymstick",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Bent-Over-Row-Gymstick.gif"
  ],
  [
    "Battle Rope",
    "shoulders",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/Battle-Rope.gif"
  ],
  [
    "One Arm Medicine Ball Slam",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2024/06/One-Arm-Medicine-Ball-Slam.gif"
  ],
  [
    "Medicine Ball Overhead Throw",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Medicine-Ball-Overhead-Throw.gif"
  ],
  [
    "Standing Medicine Ball Chest Pass",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/08/Standing-Medicine-Ball-Chest-Pass.gif"
  ],
  [
    "Arm Scissors",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Arm-Scissors.gif"
  ],
  [
    "Incline Chest Fly Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Incline-Chest-Fly-Machine.gif"
  ],
  [
    "Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif"
  ],
  [
    "Pec Deck Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif"
  ],
  [
    "Dumbbell Pullover",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif"
  ],
  [
    "Low Cable Crossover",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
  ],
  [
    "High Cable Crossover",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif"
  ],
  [
    "Cable Upper Chest Crossovers",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Cable-Upper-Chest-Crossovers.gif"
  ],
  [
    "Incline Barbell Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif"
  ],
  [
    "Dumbbell Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif"
  ],
  [
    "Dumbbell Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press-1.gif"
  ],
  [
    "Cable Crossover",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif"
  ],
  [
    "One-Arm Cable Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/12/One-Arm-Cable-Chest-Press.gif"
  ],
  [
    "Single-Arm Cable Crossover",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Single-Arm-Cable-Crossover.gif"
  ],
  [
    "Incline Dumbbell Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-dumbbell-Fly.gif"
  ],
  [
    "Incline Dumbbell Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif"
  ],
  [
    "Reverse Grip Incline Dumbbell Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Reverse-Grip-Incline-Dumbbell-Press.gif"
  ],
  [
    "Machine Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/10301301-Lever-Pec-Deck-Fly_Chest_720.gif"
  ],
  [
    "Decline Dumbbell Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Dumbbell-Press.gif"
  ],
  [
    "Lever Incline Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Incline-Chest-Press.gif"
  ],
  [
    "Chest Dips",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dips.gif"
  ],
  [
    "Assisted Chest Dip",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Assisted-Chest-Dip.gif"
  ],
  [
    "Lying Cable Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lying-Cable-Fly.gif"
  ],
  [
    "Drop Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Drop-Push-Up.gif"
  ],
  [
    "Inner Chest Press Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Inner-Chest-Press-Machine.gif"
  ],
  [
    "Decline Dumbbell Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Decline-Dumbbell-Fly.gif"
  ],
  [
    "Incline Dumbbell Hammer Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Dumbbel-Hammer-Press.gif"
  ],
  [
    "Dumbbell Upward Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Upward-Fly.gif"
  ],
  [
    "Narrow Grip Wall Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Narrow-Grip-Wall-Push-Up.gif"
  ],
  [
    "Shoulder Stretch Behind Back",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Shoulder-Stretch-Behind-Back.gif"
  ],
  [
    "Decline Chest Press Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Decline-Chest-Press-Machine.gif"
  ],
  [
    "Lying Chest Press Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lying-Chest-Press-Machine.gif"
  ],
  [
    "Wall Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Wall-Push-ups.gif"
  ],
  [
    "Smith Machine Hex Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Smith-Machine-Hex-Press.gif"
  ],
  [
    "Close-grip Incline Dumbbell Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Close-grip-Incline-Dumbbell-Press.gif"
  ],
  [
    "Kneeling Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Kneeling-Push-up.gif"
  ],
  [
    "Decline Cable Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Decline-Cable-Fly.gif"
  ],
  [
    "Smith Machine Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Bench-Press.gif"
  ],
  [
    "Smith Machine Incline Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Incline-Bench-Press.gif"
  ],
  [
    "Parallel Bar Dips",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/parallel-bar-dip.gif"
  ],
  [
    "Back Pec Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Back-Pec-Stretch.gif"
  ],
  [
    "Lever Incline Hammer Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Incline-Hammer-Chest-Press.gif"
  ],
  [
    "Lever Crossovers",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Crossovers.gif"
  ],
  [
    "Reverse Grip Dumbbell Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Grip-Dumbbell-Bench-Press.gif"
  ],
  [
    "Lever Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Chest-Press.gif"
  ],
  [
    "Incline Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif"
  ],
  [
    "Svend Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Svend-Press.gif"
  ],
  [
    "Reverse Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Reverse-Push-up.gif"
  ],
  [
    "Alternate Dumbbell Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Alternate-Dumbbell-Bench-Press.gif"
  ],
  [
    "Close-Grip Dumbbell Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Close-Grip-Dumbbell-Press.gif"
  ],
  [
    "Clap Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Clap-Push-Up.gif"
  ],
  [
    "Above Head Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Above-Head-Chest-Stretch.gif"
  ],
  [
    "Dynamic Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dynamic-Chest-Stretch.gif"
  ],
  [
    "Single Dumbbell Close-grip Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Single-Dumbbell-Close-grip-Press.gif"
  ],
  [
    "Kneeling Diamond Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Knee-Push-Up.gif"
  ],
  [
    "Dips Between Chairs",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dips-Between-Chairs.gif"
  ],
  [
    "Push-up With Push-up Bars",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Push-up-With-Push-up-Bars.gif"
  ],
  [
    "Inverted Row",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Inverted-Row.gif"
  ],
  [
    "Smith Machine Decline Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Decline-Bench-Press.gif"
  ],
  [
    "One Arm Decline Cable Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/One-Arm-Decline-Cable-Fly.gif"
  ],
  [
    "Korean Dips",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Korean-Dips.gif"
  ],
  [
    "Straight Bar Dip",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Straight-Bar-Dip.gif"
  ],
  [
    "Dumbbell One Arm Reverse Grip Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-One-Arm-Reverse-Grip-Press.gif"
  ],
  [
    "Lever One Arm Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-One-Arm-Chest-Press.gif"
  ],
  [
    "Standing One Arm Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif"
  ],
  [
    "Single Arm Medicine Ball Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Push-Up-Medicine-Ball.gif"
  ],
  [
    "Stability Ball Decline Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/stability-ball-decline-push-ups.gif"
  ],
  [
    "Dumbbell Pullover On Stability Ball",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Dumbbell-Pullover-On-Stability-Ball.gif"
  ],
  [
    "Stability Ball Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/stability-ball-push-up.gif"
  ],
  [
    "Dumbbell Decline One-Arm Hammer Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Decline-One-Arm-Hammer-Press.gif"
  ],
  [
    "Pike Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Pike-Push-up.gif"
  ],
  [
    "Weighted Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Weighted-Push-up.gif"
  ],
  [
    "Push-Up Plus",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif"
  ],
  [
    "Single Arm Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Single-Arm-Push-up.gif"
  ],
  [
    "One-Arm Kettlebell Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/One-Arm-Kettlebell-Chest-Press-on-the-Bench.gif"
  ],
  [
    "Kettlebell Chest Press on the Floor",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Kettlebell-Chest-Press-on-the-Floor.gif"
  ],
  [
    "Wide Grip Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Wide-Grip-Barbell-Bench-Press.gif"
  ],
  [
    "Decline Barbell Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/Decline-Barbell-Bench-Press.gif"
  ],
  [
    "One Arm Push Ups With Support",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/One-Arm-Push-Ups-With-Support.gif"
  ],
  [
    "Band Standing Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Band-Standing-Chest-Press.gif"
  ],
  [
    "Seated Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Chest-Stretch.gif"
  ],
  [
    "Foam Roller Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Chest-Stretch.gif"
  ],
  [
    "Foam Roller Front Shoulder and Chest",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Front-Shoulder-and-Chest-Lying-on-Floor.gif"
  ],
  [
    "Assisted Reverse Stretch (Chest And Shoulder)",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Reverse-Shoulder-Stretch.gif"
  ],
  [
    "Lying Upper Body Rotation",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Upper-Body-Rotation.gif"
  ],
  [
    "Lever Decline Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Lever-Decline-Chest-Press.gif"
  ],
  [
    "Fish Pose",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Fish-Pose-Matsyasana.gif"
  ],
  [
    "Incline Chest Press Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Chest-Press-Machine.gif"
  ],
  [
    "İncline Cable Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Cable-Fly.gif"
  ],
  [
    "Reverse Chest Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/Reverse-Chest-Stretch.gif"
  ],
  [
    "Kneeling Landmine Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Kneeling-Landmine-Press.gif"
  ],
  [
    "Pike Push-Up Between Chairs",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Pike-Push-Up-Between-Chairs.gif"
  ],
  [
    "Back Slaps Wrap Around Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Back-Slaps-Wrap-Around-Stretch.gif"
  ],
  [
    "Reaction Ball Throw",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/08/Reaction-Ball-Throw-Agility-Ball-Drill-.gif"
  ],
  [
    "Seated Cable Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Cable-Chest-Press.gif"
  ],
  [
    "Seated Cable Close Grip Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Cable-Close-Grip-Chest-Press.gif"
  ],
  [
    "Cable Half Kneeling Pallof Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Half-Kneeling-Pallof-Press.gif"
  ],
  [
    "Chest and Front of Shoulder Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chest-and-Front-of-Shoulder-Stretch.gif"
  ],
  [
    "Forearm Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Forearm-Push-up.gif"
  ],
  [
    "Banded Shoulder Adduction",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-Adduction.gif"
  ],
  [
    "Band Alternate Incline Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Alternate-Incline-Chest-Press-.gif"
  ],
  [
    "Incline Close-Grip Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Incline-Close-Grip-Bench-Press.gif"
  ],
  [
    "Close Grip Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif"
  ],
  [
    "Diamond Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif"
  ],
  [
    "Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif"
  ],
  [
    "Hammer Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Press.gif"
  ],
  [
    "Chest Press Machine",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif"
  ],
  [
    "Corner Wall Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Corner-Wall-Stretch.gif"
  ],
  [
    "Barbell Floor Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Barbell-Floor-Press.gif"
  ],
  [
    "Landmine Floor Chest Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Landmine-Floor-Chest-Fly.gif"
  ],
  [
    "Decline Hammer Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Decline-hammer-press.gif"
  ],
  [
    "Close-Grip Reverse Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Reverse-Close-grip-Bench-Press.gif"
  ],
  [
    "Wide-Grip Reverse Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Wide-Grip-Reverse-Bench-Press.gif"
  ],
  [
    "Straddle Planche",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Straddle-planche.gif"
  ],
  [
    "Close Grip Knee Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Close-Grip-Knee-Push-up.gif"
  ],
  [
    "Push-up With Rotation",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/push-up-with-rotation.gif"
  ],
  [
    "Supine Medicine Ball Chest Throw",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Supine-Medicine-Ball-Chest-Throw-exercise.gif"
  ],
  [
    "Reverse Dips",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Reverse-Dips.gif"
  ],
  [
    "Trx Chest Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Trx-Chest-Press.gif"
  ],
  [
    "Dumbbell Straight Arm Pullover (knees at 90 degrees)",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/Dumbbell-Straight-Arm-Pullover-knees-at-90-degrees.gif"
  ],
  [
    "Trx Chest Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Trx-Chest-Flyes.gif"
  ],
  [
    "Doorway Pec and Shoulder Stretch",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2021/01/Doorway-chest-and-sshoulder-stretch.gif"
  ],
  [
    "Kettlebell Renegade Row",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Kettlebell-Renegade-Row.gif"
  ],
  [
    "Push-Up to Renegade Row",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Push-Up-to-Renegade-Row.gif"
  ],
  [
    "Modified Hindu Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Modified-Hindu-Push-up.gif"
  ],
  [
    "Knuckle Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Knuckle-Push-Up.gif"
  ],
  [
    "Planche Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Planche-Push-Up.gif"
  ],
  [
    "Finger Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Finger-Push-up.gif"
  ],
  [
    "Chest Tap Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Chest-Tap-Push-up.gif"
  ],
  [
    "Kettlebell Deep Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Kettlebell-Deep-Push-Up.gif"
  ],
  [
    "Archer Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif"
  ],
  [
    "One Leg Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/One-Leg-Push-Up.gif"
  ],
  [
    "Bosu Ball Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Bosu-Ball-Push-Up.gif"
  ],
  [
    "Resistance Band Alternating Chest Fly",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Resistance-Band-Alternating-Chest-Fly.gif"
  ],
  [
    "Dumbbell Reverse Grip 30 Degrees Incline Bench Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Reverse-Grip-30-Degrees-Incline-Bench-Press.gif"
  ],
  [
    "Incline Landmine Press",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Incline-Landmine-Press.gif"
  ],
  [
    "Ring Dips",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Ring-Dips.gif"
  ],
  [
    "Cobra Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Cobra-Push-up.gif"
  ],
  [
    "Shoulder Tap Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Shoulder-Tap-Push-up.gif"
  ],
  [
    "Single Arm Raise Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Raise-Push-up.gif"
  ],
  [
    "Suspended Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Suspended-Push-Up.gif"
  ],
  [
    "Close-grip Dumbbell Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Close-grip-Dumbbell-Push-Up.gif"
  ],
  [
    "Medicine Ball Push-Up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Medicine-Ball-Push-Up.gif"
  ],
  [
    "Single Arm Push-Up on Medicine Ball",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Push-Up-on-Medicine-Ball.gif"
  ],
  [
    "Weighted Vest Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Weighted-Vest-Push-up.gif"
  ],
  [
    "Standing incline chest press With Resistance Band",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-incline-chest-press.gif"
  ],
  [
    "Middle Chest fly With Resistance Band",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Middle-fly.gif"
  ],
  [
    "Kneeling Incline Press | Gymstick",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Kneeling-Incline-Press-Gymstick.gif"
  ],
  [
    "Low Chest Fly With Resistance Band",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Low-fly.gif"
  ],
  [
    "High Chest Fly With Resistance Band",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/High-Chest-Fly-With-Resistance-Band.gif"
  ],
  [
    "Decline Push-up",
    "chest",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/Decline-Push-Up.gif"
  ],
  [
    "Rowing Machine",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif"
  ],
  [
    "Lever Front Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Front-Pulldown.gif"
  ],
  [
    "Pull-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif"
  ],
  [
    "Cable Rear Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Cable-Rear-Pulldown.gif"
  ],
  [
    "Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif"
  ],
  [
    "Seated Cable Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif"
  ],
  [
    "Barbell Bent Over Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif"
  ],
  [
    "Cable Straight Arm Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Straight-Arm-Pulldown.gif"
  ],
  [
    "Legless Rope Climb",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Rope-Climb.gif"
  ],
  [
    "Lever T-Bar Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-T-bar-Row.gif"
  ],
  [
    "Dumbbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif"
  ],
  [
    "Bent Over Dumbbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif"
  ],
  [
    "Dumbbell Bent Over Reverse Grip Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Bent-Over-Reverse-Row.gif"
  ],
  [
    "Reverse Lat-Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Lat-Pulldown.gif"
  ],
  [
    "Muscle-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Muscle-up-vertical-bar.gif"
  ],
  [
    "Seated Row Machine",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Row-Machine.gif"
  ],
  [
    "One Arm Cable Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-arm-Cable-Row.gif"
  ],
  [
    "Reverse Grip Barbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif"
  ],
  [
    "Deadlift",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif"
  ],
  [
    "Romanian Deadlift",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif"
  ],
  [
    "Upper Back Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Upper-Back-Stretch.gif"
  ],
  [
    "Kneeling High Pulley Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-High-Pulley-Row.gif"
  ],
  [
    "Sumo Deadlift",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Sumo-Deadlift.gif"
  ],
  [
    "Half Kneeling Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Half-Kneeling-Lat-Pulldown.gif"
  ],
  [
    "Dumbbell Straight Leg Deadlift",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif"
  ],
  [
    "Across Chest Shoulder Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Across-Chest-Shoulder-Stretch.gif"
  ],
  [
    "Standing Reach Up Back rotation Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Standing-Reach-Up-Back-rotation-Stretch.gif"
  ],
  [
    "Shoulder Stretch Behind Back",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Shoulder-Stretch-Behind-Back.gif"
  ],
  [
    "Smith Machine Bent Over Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Bent-Over-Row.gif"
  ],
  [
    "Incline Reverse Grip Dumbbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Reverse-Grip-Dumbbell-Row.gif"
  ],
  [
    "Barbell Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Bent-Arm-Pullover.gif"
  ],
  [
    "Cable Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lying-Extension-Pullover.gif"
  ],
  [
    "Weighted Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Pull-up.gif"
  ],
  [
    "Reverse grip Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-grip-Pull-up.gif"
  ],
  [
    "Close Grip Chin Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Close-Grip-Chin-Up.gif"
  ],
  [
    "Assisted Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Assisted-Pull-up.gif"
  ],
  [
    "Table Inverted Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Table-Inverted-Row.gif"
  ],
  [
    "Cable One Arm Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cable-One-Arm-Lat-Pulldown.gif"
  ],
  [
    "Reverse Grip Machine Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Reverse-Grip-Machine-Row.gif"
  ],
  [
    "Close Grip Cable Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/close-grip-cable-row.gif"
  ],
  [
    "Rope Straight Arm Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Rope-Straight-Arm-Pulldown.gif"
  ],
  [
    "V-bar Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/V-bar-Lat-Pulldown.gif"
  ],
  [
    "One-Arm Barbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/One-Arm-Barbell-Row-.gif"
  ],
  [
    "T-Bar Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif"
  ],
  [
    "Incline Cable Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Incline-Cable-Row.gif"
  ],
  [
    "Cable Bent Over Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Bent-Over-Row.gif"
  ],
  [
    "Standing Side Bend Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Standing-Side-Bend-Stretch.gif"
  ],
  [
    "Back Pec Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Back-Pec-Stretch.gif"
  ],
  [
    "Double Cable Neutral Grip Lat Pulldown On Floor",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Double-Cable-Neutral-Grip-Lat-Pulldown-On-Floor.gif"
  ],
  [
    "Incline Barbell Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Barbell-Row.gif"
  ],
  [
    "Kneeling Single Arm High Pulley Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-Single-Arm-High-Pulley-Row.gif"
  ],
  [
    "Upside Down Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Upside-Down-Pull-up.gif"
  ],
  [
    "Swimming",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Swimming.gif"
  ],
  [
    "Brachialis Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Brachialis-Pull-up.gif"
  ],
  [
    "Close Grip Lat-Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Close-Grip-Lat-Pulldown.gif"
  ],
  [
    "Seated Cable Rope Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Cable-Rope-Row.gif"
  ],
  [
    "Cable Seated Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Cable-Seated-Pullover.gif"
  ],
  [
    "Scapular Protraction and Retraction",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Scapular-Protraction-and-Retraction.gif"
  ],
  [
    "Ring Inverted Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Ring-Inverted-Row.gif"
  ],
  [
    "Inverted Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Inverted-Row.gif"
  ],
  [
    "Lever Cable Rear Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Cable-Rear-Pulldown.gif"
  ],
  [
    "Shotgun Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/shotgun-row.gif"
  ],
  [
    "Elbow Reverse Push-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Elbow-Reverse-Push-Up.gif"
  ],
  [
    "Weighted One Arm Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Weighted-One-Arm-Pull-up.gif"
  ],
  [
    "Cable Crossover Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Cable-Crossover-Lat-Pulldown.gif"
  ],
  [
    "One Arm Landmine Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/One-Arm-Landmine-Row.gif"
  ],
  [
    "Lever Reverse T-Bar Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Reverse-T-Bar-Row.gif"
  ],
  [
    "Kettlebell Bent Over Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Kettlebell-Bent-Over-Row.gif"
  ],
  [
    "Full Range Of Motion Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Full-Range-Of-Motion-Lat-Pulldown.gif"
  ],
  [
    "Chin-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/Chin-Up.gif"
  ],
  [
    "Seated Toe Touches",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Toe-Touches.gif"
  ],
  [
    "L-Sit Pull-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/L-Pull-Up.gif"
  ],
  [
    "Back Lever",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Back-Lever.gif"
  ],
  [
    "Swing 360",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Swing-360.gif"
  ],
  [
    "Front Lever Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Front-Lever-Pull-up.gif"
  ],
  [
    "Towel Shoulder Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Stretch-With-Towel.gif"
  ],
  [
    "Foam Roller Back Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Upper-Back.gif"
  ],
  [
    "Foam Roller Rhomboids",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Rhomboids.gif"
  ],
  [
    "Foam Roller Upper Back",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Upper-Back.gif"
  ],
  [
    "Foam Roller Lat Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Lat-Stretch.gif"
  ],
  [
    "Lying Upper Body Rotation",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Upper-Body-Rotation.gif"
  ],
  [
    "Lever Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lever-Pullover-plate-loaded.gif"
  ],
  [
    "One Arm Chin-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/One-Arm-Chin-Up.gif"
  ],
  [
    "Scapula Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Scapula-Pull-up.gif"
  ],
  [
    "Archer Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Archer-Pull-up.gif"
  ],
  [
    "Jumping Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/jumping-pull-up.gif"
  ],
  [
    "Commando Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/commander-pull-up.gif"
  ],
  [
    "Behind The Neck Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Behind-The-Neck-Pull-up.gif"
  ],
  [
    "Cable One-Arm Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Cable-One-Arm-Pulldown.gif"
  ],
  [
    "Barbell Decline Bent Arm Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Barbell-Decline-Bent-Arm-Pullover.gif"
  ],
  [
    "Dead Hang",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/dead-hang-360x360.png"
  ],
  [
    "Isometric Pull-Up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Isometric-Pull-Up.gif"
  ],
  [
    "Wide Grip Barbell Bent Over Row Plus",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Wide-Grip-Barbell-Bent-Over-Row-Plus.gif"
  ],
  [
    "Wide Grip Alternate Barbell Bent Over Row Plus",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Wide-Grip-Alternate-Barbell-Bent-Over-Row-Plus.gif"
  ],
  [
    "Wall Slides",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/wall-slide.gif"
  ],
  [
    "Kneeling T-spine Rotation",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Kneeling-T-spine-Rotation.gif"
  ],
  [
    "Climbing Monkey Bars",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Climbing-Monkey-Bars.gif"
  ],
  [
    "Supine Spinal Twist",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Supine-Spinal-Twist.gif"
  ],
  [
    "Back Slaps Wrap Around Stretch",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Back-Slaps-Wrap-Around-Stretch.gif"
  ],
  [
    "Bodyweight Row in Doorway",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Bodyweight-Row-in-Doorway.gif"
  ],
  [
    "Lever High Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Lever-High-Row.gif"
  ],
  [
    "Incline Dumbbell Hammer Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Incline-Dumbbell-Hammer-Row.gif"
  ],
  [
    "Plate Loaded Seated Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Plate-Loaded-Seated-Row.gif"
  ],
  [
    "Chin Up Around the Bar",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Up-Around-the-Bar.gif"
  ],
  [
    "EZ-Bar Bent Arm Pullover",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/EZ-Bar-Bent-Arm-Pullover.gif"
  ],
  [
    "Banded Shoulder Extension",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-Extension.gif"
  ],
  [
    "Banded Shoulder Adduction",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Banded-Shoulder-Adduction.gif"
  ],
  [
    "Landmine T-Bar Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif"
  ],
  [
    "Cable Twisting Standing High Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Twisting-Standing-high-Row.gif"
  ],
  [
    "Single Arm Twisting Seated Cable Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Arm-Twisting-Seated-Cable-Row.gif"
  ],
  [
    "Band Alternating Lat Pulldown",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Alternating-Lat-Pulldown.gif"
  ],
  [
    "Band Alternating Low Row with Twist",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Alternating-Low-Row-with-Twist.gif"
  ],
  [
    "Band Seated Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Seated-Row.gif"
  ],
  [
    "Barbell Pendlay Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Barbell-Pendlay-Row.gif"
  ],
  [
    "Standing side bend",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif"
  ],
  [
    "Neutral Grip Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/neutral-grip-pull-up.gif"
  ],
  [
    "Medicine ball Overhead Slam",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Medicine-ball-Overhead-Slam-exercise.gif"
  ],
  [
    "Dumbbell Seal Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/Dumbbell-Seal-Row.gif"
  ],
  [
    "Kettlebell Renegade Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Kettlebell-Renegade-Row.gif"
  ],
  [
    "Push-Up to Renegade Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Push-Up-to-Renegade-Row.gif"
  ],
  [
    "Dumbbell Renegade Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2021/01/dumbbell-renegade-row-1.gif"
  ],
  [
    "Band Assisted Pull-up",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/band-assisted-pull-up.gif"
  ],
  [
    "Standing Banded Row",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Straight_Back-back-standing-row.gif"
  ],
  [
    "Kneeling Pulldown With Resistance Band",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Kneeling-pulldown.gif"
  ],
  [
    "Bent Over Row | Gymstick",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Bent-Over-Row-Gymstick.gif"
  ],
  [
    "Battle Rope",
    "back",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/Battle-Rope.gif"
  ],
  [
    "Seated Zottman Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Seated-Zottman-Curl.gif"
  ],
  [
    "Standing Barbell Concentration Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Standing-Barbell-Concentration-Curl.gif"
  ],
  [
    "Waiter Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/waiter-curl.gif"
  ],
  [
    "Double Arm Dumbbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Double-Arm-Dumbbell-Curl.gif"
  ],
  [
    "Dumbbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif"
  ],
  [
    "Barbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif"
  ],
  [
    "Concentration Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif"
  ],
  [
    "Dumbbell Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif"
  ],
  [
    "EZ Bar Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Z-Bar-Preacher-Curl.gif"
  ],
  [
    "Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif"
  ],
  [
    "Seated Incline Dumbbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Incline-Dumbbell-Curl.gif"
  ],
  [
    "Lever Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Preacher-Curl.gif"
  ],
  [
    "High Cable Single Arm Bicep Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/High-Cable-Single-Arm-Bicep-Curl.gif"
  ],
  [
    "One Arm Cable Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Cable-Curl.gif"
  ],
  [
    "Lying Cable Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/lying-cable-curl.gif"
  ],
  [
    "Zottman Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/zottman-curl.gif"
  ],
  [
    "Dumbbell Reverse Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/dumbbell-reverse-curl.gif"
  ],
  [
    "Seated Close-Grip Concentration Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-close-grip-concentration-curl.gif"
  ],
  [
    "Biceps Leg Concentration Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Biceps-Leg-Concentration-Curl.gif"
  ],
  [
    "Prone Incline Barbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Prone-Incline-Biceps-Curl.gif"
  ],
  [
    "Overhead Cable Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/overhead-cable-curl.gif"
  ],
  [
    "Seated Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Hammer-Curl.gif"
  ],
  [
    "Seated Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/seated-biceps-curl.gif"
  ],
  [
    "Single Arm Cable Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/cable-preacher-curls.gif"
  ],
  [
    "Cable Concentration Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Concentration-Curl.gif"
  ],
  [
    "Reverse Grip EZ-Bar Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Reverse-Grip-EZ-Bar-Curl.gif"
  ],
  [
    "Dumbbell Scott Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Dumbbell-Scott-Hammer-Curl.gif"
  ],
  [
    "Lying High Bench Barbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-High-Bench-Barbell-Curl.gif"
  ],
  [
    "Cable Rope Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/rope-bicep-curls.gif"
  ],
  [
    "Biceps Curl Machine",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Bicep-Curl-Machine.gif"
  ],
  [
    "Dumbbell High Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-High-Curl.gif"
  ],
  [
    "Brachialis Pull-up",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Brachialis-Pull-up.gif"
  ],
  [
    "Close Grip Z-Bar Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Close-Grip-Z-Bar-Curl.gif"
  ],
  [
    "Dumbbell Scott Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/dumbbell-scot-curl.gif"
  ],
  [
    "Barbell Curl On Arm Blaster",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Barbell-Curl-On-Arm-Blaster.gif"
  ],
  [
    "Arm Blaster Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Arm-Blaster-Hammer-Curl.gif"
  ],
  [
    "Dumbbell Curl On Arm Blaster",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Dumbbell-Curl-On-Arm-Blaster.gif"
  ],
  [
    "Standing One Arm Chest Stretch",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif"
  ],
  [
    "One Arm Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/One-Arm-Biceps-Curl-1.gif"
  ],
  [
    "Chin-Up",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/Chin-Up.gif"
  ],
  [
    "Lever Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Biceps-Curl.gif"
  ],
  [
    "Cable Incline Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Cable-Incline-Biceps-Curl.gif"
  ],
  [
    "One Arm Chin-Up",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/One-Arm-Chin-Up.gif"
  ],
  [
    "Dumbbell Preacher Hammer (Scott) Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Preacher-Hammer-Curl.gif"
  ],
  [
    "One Arm Prone Dumbbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/One-Arm-Prone-Dumbbell-Curl.gif"
  ],
  [
    "Dumbbell Alternate Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Alternate-Preacher-Curl.gif"
  ],
  [
    "Two Dumbbell Preacher Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Two-dumbbell-preacher-curl.gif"
  ],
  [
    "Flexor Incline Dumbbell Curls",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Flexor-Incline-Dumbbell-Curls.gif"
  ],
  [
    "Barbell Alternate Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Alternate-Biceps-Curl.gif"
  ],
  [
    "Cable Kneeling Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Cable-Kneeling-Biceps-Curl.gif"
  ],
  [
    "Cable Two Arm Curl on Incline Bench",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Two-Arm-Curl-on-Incline-Bench.gif"
  ],
  [
    "Chin Up Around the Bar",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Chin-Up-Around-the-Bar.gif"
  ],
  [
    "Elbow Flexion",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/elbow-flexion.gif"
  ],
  [
    "Cable Pulldown Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Pulldown-Bicep-Curl.gif"
  ],
  [
    "Band Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Biceps-Curl.gif"
  ],
  [
    "Single Dumbbell Spider Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Dumbbell-Spider-Hammer-Curl.gif"
  ],
  [
    "Cable Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/cable-curl.gif"
  ],
  [
    "Z-Bar Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Z-Bar-Curl.gif"
  ],
  [
    "Hammer Curl with Resistance Band",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Hammer-Curl-with-Resistance-Band.gif"
  ],
  [
    "Cable Reverse Grip EZ-bar Biceps Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif"
  ],
  [
    "Standing Reverse Shoulder Stretch",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Standing-Reverse-Shoulder-Stretch.gif"
  ],
  [
    "Barbell Drag Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Barbell-Drag-Curl.gif"
  ],
  [
    "Close Grip Barbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/close-grip-barbell-curl.gif"
  ],
  [
    "One Arm Cable Bicep Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/One-Arm-Cable-Bicep-Curl.gif"
  ],
  [
    "Single Arm Reverse Grip Cable Bicep Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Single-Arm-Reverse-Grip-Cable-Bicep-Curl.gif"
  ],
  [
    "Water Bottle Hammer Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Water-Bottle-Hammer-Curl.gif"
  ],
  [
    "Seated Alternating Dumbbell Curl",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Seated-dumbbell-alternating-curl.gif"
  ],
  [
    "Seated Bicep Curl With Resistance Band",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Seated-Bicep-Curl-With-Resistance-Band.gif"
  ],
  [
    "One-Arm Biceps Curl With Resistance Band",
    "biceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/One-Arm-Biceps-Curl.gif"
  ],
  [
    "Medicine Ball Overhead Throw",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Medicine-Ball-Overhead-Throw.gif"
  ],
  [
    "One Arm Triceps Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/One-arm-triceps-pushdown.gif"
  ],
  [
    "Dumbbell Kickback",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif"
  ],
  [
    "One Arm Reverse Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Reverse-Push-Down.gif"
  ],
  [
    "Push-down",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif"
  ],
  [
    "Bench Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif"
  ],
  [
    "Triceps Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif"
  ],
  [
    "One Arm Lying Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/One-Arm-Lying-Triceps-Extension.gif"
  ],
  [
    "Cable Rope Overhead Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Rope-Overhead-Triceps-Extension.gif"
  ],
  [
    "Lever Triceps Dip",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Overhand-Triceps-Dip.gif"
  ],
  [
    "Lying Barbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Triceps-Extension.gif"
  ],
  [
    "Cable Tricep Kickback",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Tricep-Kickback.gif"
  ],
  [
    "Triceps Dips on Floor",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-dips-on-floors.gif"
  ],
  [
    "Dumbbell Seated Front and Back Tate Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Seated-Front-and-Back-Tate-Press.gif"
  ],
  [
    "Kneeling Cable Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-Cable-Extension.gif"
  ],
  [
    "Cable Rear Drive",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Rear-Drive.gif"
  ],
  [
    "Narrow Grip Wall Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Narrow-Grip-Wall-Push-Up.gif"
  ],
  [
    "Shoulder Stretch Behind Back",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Shoulder-Stretch-Behind-Back.gif"
  ],
  [
    "Body Ups",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Body-Ups.gif"
  ],
  [
    "Wall Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Wall-Push-ups.gif"
  ],
  [
    "Cable Lying Triceps Extensions",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Lying-Triceps-Extensions.gif"
  ],
  [
    "Chair Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/CHAIR-DIPS.gif"
  ],
  [
    "Seated One-Arm Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-One-Arm-Dumbbell-Triceps-Extension.gif"
  ],
  [
    "Seated Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Dumbbell-Triceps-Extension.gif"
  ],
  [
    "Lever Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Tricep-Extension.gif"
  ],
  [
    "Bench Dips on Floor",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-Dips-on-Floor.gif"
  ],
  [
    "Parallel Bar Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/parallel-bar-dip.gif"
  ],
  [
    "Dumbbell Skull Crusher",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Skull-Crusher.gif"
  ],
  [
    "Dumbbell Incline Two Arm Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Incline-Two-Arm-Extension.gif"
  ],
  [
    "One Arm Pronated Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/One-Arm-Pronated-Dumbbell-Triceps-Extension-.gif"
  ],
  [
    "Seated EZ-Bar Overhead Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-EZ-Bar-Overhead-Triceps-Extension.gif"
  ],
  [
    "Cable Incline Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Incline-Triceps-Extension.gif"
  ],
  [
    "Reverse Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Reverse-Push-up.gif"
  ],
  [
    "Cable Side Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Side-Triceps-Extension.gif"
  ],
  [
    "Incline EZ-Bar Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/EZ-Barbell-Incline-Triceps-Extension.gif"
  ],
  [
    "High Pulley Overhead Tricep Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/High-Pulley-Overhead-Tricep-Extension.gif"
  ],
  [
    "Rope Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Rope-Pushdown.gif"
  ],
  [
    "Reverse Grip Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Grip-Pushdown.gif"
  ],
  [
    "Cross Arm Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cross-Arm-Push-up.gif"
  ],
  [
    "Cable Concentration Extension on Knee",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Concentration-Extension-on-knee.gif"
  ],
  [
    "Close-Grip Dumbbell Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Close-Grip-Dumbbell-Press.gif"
  ],
  [
    "Single Dumbbell Close-grip Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Single-Dumbbell-Close-grip-Press.gif"
  ],
  [
    "Kneeling Diamond Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Knee-Push-Up.gif"
  ],
  [
    "Dips Between Chairs",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dips-Between-Chairs.gif"
  ],
  [
    "Cable One-Arm Overhead Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cable-One-Arm-Overhead-Triceps-Extension.gif"
  ],
  [
    "Standing Barbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Barbell-Triceps-Extension.gif"
  ],
  [
    "Impossible Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Impossible-Dips.gif"
  ],
  [
    "Korean Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Korean-Dips.gif"
  ],
  [
    "Straight Bar Dip",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Straight-Bar-Dip.gif"
  ],
  [
    "Exercise Ball Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Exercise-Ball-Supine-Triceps-Extension.gif"
  ],
  [
    "Dumbbell Decline One-Arm Hammer Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Decline-One-Arm-Hammer-Press.gif"
  ],
  [
    "Triceps Extension Machine",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Triceps-Extension-Machine.gif"
  ],
  [
    "Triceps Dip Machine",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Triceps-Dip-Machine.gif"
  ],
  [
    "Single Arm Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Single-Arm-Push-up.gif"
  ],
  [
    "Wall-Supported Handstand Push-Ups",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/wall-supported-handstand-push-up.gif"
  ],
  [
    "Towel Shoulder Stretch",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Stretch-With-Towel.gif"
  ],
  [
    "Decline Close-Grip Bench To Skull Crusher",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Decline-Close-Grip-Bench-To-Skull-Crusher.gif"
  ],
  [
    "Barbell One Arm Floor Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-One-Arm-Floor-Press.gif"
  ],
  [
    "Asisted Triceps Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/Asisted-Triceps-Dips.gif"
  ],
  [
    "Reaction Ball Throw",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/08/Reaction-Ball-Throw-Agility-Ball-Drill-.gif"
  ],
  [
    "Standing Triceps Stretch",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Triceps-Stretch.gif"
  ],
  [
    "Forearm Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Forearm-Push-up.gif"
  ],
  [
    "EZ-Bar Bent Arm Pullover",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/EZ-Bar-Bent-Arm-Pullover.gif"
  ],
  [
    "Low Cable Tricep Kickback",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Low-Cable-Tricep-Kickback.gif"
  ],
  [
    "Band Skull Crusher",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Skull-Crusher.gif"
  ],
  [
    "Band Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Pushdown.gif"
  ],
  [
    "Decline Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Decline-Dumbbell-Triceps-Extension.gif"
  ],
  [
    "Dumbbell Tate Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Tate-Press.gif"
  ],
  [
    "Handstand Push-ups Between Benches",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/Handstand-Push-ups-Between-Benches.gif"
  ],
  [
    "Kipping Handstand Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/kipping-handstand-push-up.gif"
  ],
  [
    "Bent Over Kickback",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Triceps-Kickback.gif"
  ],
  [
    "Close Grip Bench Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif"
  ],
  [
    "Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif"
  ],
  [
    "Diamond Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif"
  ],
  [
    "Triceps Extension with Resistance Bands",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Triceps-Extension-with-Resistance-Bands.gif"
  ],
  [
    "Alternating Lying Dumbbell Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Alternating-Lying-Dumbbell-Triceps-Extension.gif"
  ],
  [
    "Barbell Reverse Grip Skullcrusher",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Reverse-Grip-Skullcrusher-1.gif"
  ],
  [
    "Barbell Lying Back of the Head Tricep Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Lying-Back-of-the-Head-Tricep-Extension.gif"
  ],
  [
    "EZ Bar Lying Close Grip Triceps Extension Behind Head",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/EZ-Bar-Lying-Close-Grip-Triceps-Extension-Behind-Head.gif"
  ],
  [
    "Kneeling Cable Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Cable-Triceps-Extension.gif"
  ],
  [
    "Close-Grip Reverse Bench Press",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Reverse-Close-grip-Bench-Press.gif"
  ],
  [
    "One Arm High Pulley Overhead Tricep Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-One-Arm-High-Pulley-Overhead-Tricep-Extension.gif"
  ],
  [
    "Cable Crossover Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Crossover-Triceps-Extension.gif"
  ],
  [
    "Side One Arm Reverse Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Side-One-Arm-Reverse-Pushdown.gif"
  ],
  [
    "Bodyweight Skull Crushers",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Bodyweight-Skull-Crushers.gif"
  ],
  [
    "V-bar Pushdown",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/V-bar-Pushdown.gif"
  ],
  [
    "Cable Rope Lying Tricep Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Rope-Lying-on-Floor-Tricep-Extension.gif"
  ],
  [
    "Cable Lying Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Lying-Triceps-Extension.gif"
  ],
  [
    "Straddle Planche",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Straddle-planche.gif"
  ],
  [
    "Close Grip Knee Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Close-Grip-Knee-Push-up.gif"
  ],
  [
    "Supine Medicine Ball Chest Throw",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Supine-Medicine-Ball-Chest-Throw-exercise.gif"
  ],
  [
    "Reverse Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Reverse-Dips.gif"
  ],
  [
    "Planche Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Planche-Push-Up.gif"
  ],
  [
    "Archer Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif"
  ],
  [
    "Ring Dips",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Ring-Dips.gif"
  ],
  [
    "Single Arm Raise Push-up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Raise-Push-up.gif"
  ],
  [
    "Suspended Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Suspended-Push-Up.gif"
  ],
  [
    "Close-grip Dumbbell Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Close-grip-Dumbbell-Push-Up.gif"
  ],
  [
    "Medicine Ball Push-Up",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Medicine-Ball-Push-Up.gif"
  ],
  [
    "Single Arm Push-Up on Medicine Ball",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Push-Up-on-Medicine-Ball.gif"
  ],
  [
    "Rear Drive With Resistance Band",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Rear-Drive.gif"
  ],
  [
    "Standing Triceps Extension | Gymstick",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Triceps-Extension.gif"
  ],
  [
    "Banded Overhead Triceps Extension",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2020/05/Banded-Triceps-Extension.gif"
  ],
  [
    "Overhead Triceps Extension | Gymstick",
    "triceps",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Overhead-Triceps-Extension.gif"
  ],
  [
    "Seated Zottman Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Seated-Zottman-Curl.gif"
  ],
  [
    "Wrist Roller",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/wrist-roller.gif"
  ],
  [
    "Dumbbell Seated Neutral Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Seated-Neutral-Wrist-Curl.gif"
  ],
  [
    "Dumbbell Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Wrist-Curl.gif"
  ],
  [
    "Barbell Reverse Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Reverse-Wrist-Curl.gif"
  ],
  [
    "Wrist Circles Stretch",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Wrist-Circles-Stretch.gif"
  ],
  [
    "Barbell Reverse Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif"
  ],
  [
    "Cable One-Arm Wrist Curl On Floor",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-One-Arm-Wrist-Curl-On-Floor.gif"
  ],
  [
    "Hand Gripper",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Hand-Gripper.gif"
  ],
  [
    "Dumbbell Reverse Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/dumbbell-reverse-curl.gif"
  ],
  [
    "Seated Hammer Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Hammer-Curl.gif"
  ],
  [
    "Reverse Grip EZ-Bar Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Reverse-Grip-EZ-Bar-Curl.gif"
  ],
  [
    "Dumbbell Scott Hammer Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Dumbbell-Scott-Hammer-Curl.gif"
  ],
  [
    "Behind The Back Barbell Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Behind-The-Back-Barbell-Wrist-Curl.gif"
  ],
  [
    "Standing One Arm Chest Stretch",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif"
  ],
  [
    "Wrist Ulnar Deviator And Extensor Stretch",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2023/03/Wrist-Ulnar-Deviator-And-Extensor-Stretch.gif"
  ],
  [
    "Reverse Wrist Stretch",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2023/03/reverse-Wrist-Stretch.gif"
  ],
  [
    "Wrist Stretch",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2023/03/Wrist-Stretch.gif"
  ],
  [
    "Dumbbell Preacher Hammer (Scott) Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Preacher-Hammer-Curl.gif"
  ],
  [
    "Weighted Neutral Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Weighted-Wrist-Curl.gif"
  ],
  [
    "Single Dumbbell Spider Hammer Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Dumbbell-Spider-Hammer-Curl.gif"
  ],
  [
    "Reverse Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Wrist-Curl.gif"
  ],
  [
    "Wrist Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/barbell-Wrist-Curl.gif"
  ],
  [
    "Hammer Curl with Resistance Band",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Hammer-Curl-with-Resistance-Band.gif"
  ],
  [
    "Cable Reverse Grip EZ-bar Biceps Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif"
  ],
  [
    "Barbell Finger Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Barbell-Finger-Curl.gif"
  ],
  [
    "Dumbbell Finger Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbbell-Finger-Curl.gif"
  ],
  [
    "Single Arm Reverse Grip Cable Bicep Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Single-Arm-Reverse-Grip-Cable-Bicep-Curl.gif"
  ],
  [
    "Barbell Reverse Wrist Curl Over a Bench",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Barbell-Reverse-Wrist-Curl-Over-a-Bench.gif"
  ],
  [
    "Water Bottle Hammer Curl",
    "forearm",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Water-Bottle-Hammer-Curl.gif"
  ],
  [
    "One Arm Medicine Ball Slam",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2024/06/One-Arm-Medicine-Ball-Slam.gif"
  ],
  [
    "Medicine Ball Rotational Throw",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/12/Medicine-Ball-Rotational-Throw.gif"
  ],
  [
    "Dragon Flag",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Leg-Raise-Dragon-Flag.gif"
  ],
  [
    "Ab Coaster Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Ab-Coaster-Machine.gif"
  ],
  [
    "Cross Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Cross-Crunch.gif"
  ],
  [
    "Standing Cable Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Standing-Cable-Crunch.gif"
  ],
  [
    "Seated Bench Leg Pull-in",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Bench-Leg-Pull-in.gif"
  ],
  [
    "Cross Body Mountain Climber",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Cross-Body-Mountain-Climber.gif"
  ],
  [
    "Alternate Leg Raises",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Alternate-Leg-Raises.gif"
  ],
  [
    "Crunches",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif"
  ],
  [
    "Mountain Climber",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif"
  ],
  [
    "Bicycle Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif"
  ],
  [
    "Lying Scissor Kick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lying-Scissor-Kick.gif"
  ],
  [
    "Leg Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif"
  ],
  [
    "Oblique Floor Crunches",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Oblique-Floor-Crunches.gif"
  ],
  [
    "T-Cross Sit-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/T-Cross-Sit-up.gif"
  ],
  [
    "Dead Bug",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dead-Bug.gif"
  ],
  [
    "Decline Sit-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Decline-Sit-up.gif"
  ],
  [
    "Reverse Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Crunch-1.gif"
  ],
  [
    "Kneeling Cable Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Cable-Crunch.gif"
  ],
  [
    "Heel Touch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Heel-Touch.gif"
  ],
  [
    "Standing Rotation",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Rotation.gif"
  ],
  [
    "Standing Toe Touch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Toe-Touch.gif"
  ],
  [
    "Crunch With Leg Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Crunch-With-Leg-Raise.gif"
  ],
  [
    "Alternate Lying Floor Leg Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Alternate-Lying-Floor-Leg-Raise.gif"
  ],
  [
    "Weighted Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Weighted-Crunch.gif"
  ],
  [
    "Seated Side Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Side-Crunches.gif"
  ],
  [
    "Incline Leg Hip Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Incline-Leg-Hip-Raise.gif"
  ],
  [
    "Bodyweight Windmill",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Windmill.gif"
  ],
  [
    "Front to Side Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Front-to-Side-Plank.gif"
  ],
  [
    "Tuck Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Tuck-Crunch.gif"
  ],
  [
    "Dumbbell Side Bend",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Side-Bend.gif"
  ],
  [
    "Double Leg Stretch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Double-Leg-Stretch.gif"
  ],
  [
    "Spider Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Spider-Plank.gif"
  ],
  [
    "Captains Chair Leg Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Captains-Chair-Leg-Raise.gif"
  ],
  [
    "Bench Side Bend",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bench-Side-Bend.gif"
  ],
  [
    "Crab Twist Toe Touch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Crab-Twist-Toe-Touch.gif"
  ],
  [
    "Quarter Sit-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Quarter-Sit-up.gif"
  ],
  [
    "Weighted Sit-ups",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/weightedsitups.gif"
  ],
  [
    "Lying Knee Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lying-Knee-Raise.gif"
  ],
  [
    "Floor Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Floor-Crunch.gif"
  ],
  [
    "Reverse Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Reverse-plank.gif"
  ],
  [
    "Stability Ball Knee Tuck",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Stability-Ball-Knee-Tuck.gif"
  ],
  [
    "Hanging Knee Raises",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Knee-Raises.gif"
  ],
  [
    "Hanging Side Knee Raises",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Hanging-Side-Knee-Raises.gif"
  ],
  [
    "Hanging Windshield Wiper",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Hanging-Windshield-Wiper.gif"
  ],
  [
    "Toes to Bar",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Toes-to-Bar.gif"
  ],
  [
    "Weighted Hanging Knee Raises",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/weighted-hanging-knee-raises.gif"
  ],
  [
    "Teaser Pilates",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Teaser-Pilates.gif"
  ],
  [
    "Seated Oblique Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Oblique-Twist.gif"
  ],
  [
    "Side Bridge",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Bridge.gif"
  ],
  [
    "Plank With Arm And Leg Lift",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Plank-with-Arm-and-Leg-Lift.gif"
  ],
  [
    "Weighted Front Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif"
  ],
  [
    "Cable Side Bend",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Cable-Side-Bend.gif"
  ],
  [
    "Barbell Side Bend",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Barbell-Side-Bend.gif"
  ],
  [
    "Seated Barbell Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Barbell-Seated-Twist.gif"
  ],
  [
    "Bent Over Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Bent-Over-Twist.gif"
  ],
  [
    "Dumbbell V-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-V-up.gif"
  ],
  [
    "Lever Lying Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Lying-Crunch.gif"
  ],
  [
    "Twisting Hyperextension",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Twisting-Hyperextension.gif"
  ],
  [
    "Ab Roller Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/12/Ab-Roller-Crunch.gif"
  ],
  [
    "Standing Cable High-To-Low Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Cable-High-To-Low-Twist.gif"
  ],
  [
    "Standing Cable Low-To-High Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Standing-Cable-low-to-high-Twist.gif"
  ],
  [
    "Standing Cable Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/standing-cable-twist.gif"
  ],
  [
    "L-Sit",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/L-Sit.gif"
  ],
  [
    "High Knee Squat",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/11/High-Knee-Squat.gif"
  ],
  [
    "Kettlebell Windmill",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Windmill.gif"
  ],
  [
    "Kettlebell Swings",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif"
  ],
  [
    "Full Crunch Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Full-Crunch-Machine.gif"
  ],
  [
    "Front Plank with Arm Lift",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Front-Plank-with-Arm-Lift.gif"
  ],
  [
    "Bhujangasana | Cobra Abdominal Stretch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/abdominal-stretch.gif"
  ],
  [
    "Ab Straps Leg Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Ab-Straps-Leg-Raise.gif"
  ],
  [
    "Boat Pose",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Boat-Pose-Stretch.gif"
  ],
  [
    "Seated Twist Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Lever-Seated-Twist.gif"
  ],
  [
    "Inchworm",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Inchworm.gif"
  ],
  [
    "Front Plank With Arm And Leg Lift",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Front-Plank-With-Arm-And-Leg-Lift.gif"
  ],
  [
    "Weighted Lying Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/weighted-lying-twist.gif"
  ],
  [
    "Swiss Ball Rollout",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/swiss-ball-rollout.gif"
  ],
  [
    "Weighted Side Bend On Stability Ball",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Weighted-Side-Bend-on-stability-ball.gif"
  ],
  [
    "Stability Ball V-Up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/V-Up-Down-with-Stability-ball.gif"
  ],
  [
    "Exercise Ball Frog Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Exercise-Ball-Frog-Crunch.gif"
  ],
  [
    "Cable Seated Cross Arm Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Cable-Seated-Cross-Arm-Twist.gif"
  ],
  [
    "Burpees",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/burpees.gif"
  ],
  [
    "Standing Twist Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Standing-Twist-Machine.gif"
  ],
  [
    "Seated Crunch Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Seated-Crunch-Machine.gif"
  ],
  [
    "Barbell Rollout",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Barbell-Rollout.gif"
  ],
  [
    "Landmine Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Landmine-Twist.gif"
  ],
  [
    "Frog Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/frog-crunch.gif"
  ],
  [
    "Ab Wheel Rollout",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Ab-Wheel-Rollout.gif"
  ],
  [
    "Lying Upper Body Rotation",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Upper-Body-Rotation.gif"
  ],
  [
    "Bicycle Twisting Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Bicycle-Twisting-Crunch.gif"
  ],
  [
    "Fish Pose",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Fish-Pose-Matsyasana.gif"
  ],
  [
    "Hands In Air Dead Bug",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif"
  ],
  [
    "4 Point Tummy Vacuum Exercise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/4-Point-Tummy-Vacuum-Exercise.gif"
  ],
  [
    "Seated Flutter Kick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Flutter-Kick.gif"
  ],
  [
    "Seated Cable Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Cable-Twist.gif"
  ],
  [
    "Bodyweight Kneeling Sissy Squat",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Bodyweight-Kneeling-Sissy-Squat.gif"
  ],
  [
    "Bow Pose",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bow-Yoga-Pose.gif"
  ],
  [
    "Kneeling T-spine Rotation",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Kneeling-T-spine-Rotation.gif"
  ],
  [
    "Standing Barbell Rollout",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Barbell-Rollout.gif"
  ],
  [
    "Side Plank Oblique Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/11/Side-Plank-Oblique-Crunch.gif"
  ],
  [
    "Medicine Ball-Sit-up Throw",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Medicine-Ball-Sit-up-Throw.gif"
  ],
  [
    "Side Bent",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Side-Bent.gif"
  ],
  [
    "Leg Scissors",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Leg-Scissors.gif"
  ],
  [
    "Abdominal Bracing",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Abdominal-bracing-exercise-386x386.png"
  ],
  [
    "Lying Toe Touches",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Lying-Toe-Touches.gif"
  ],
  [
    "Dumbbell Floor Wipers",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Dumbbell-Floor-Wipers.gif"
  ],
  [
    "Side Bridge Hip Abduction",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Side-Bridge-Hip-Abduction.gif"
  ],
  [
    "Cable Half Kneeling Pallof Press",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Half-Kneeling-Pallof-Press.gif"
  ],
  [
    "Snap Jumps",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/SNAP-JUMPS.gif"
  ],
  [
    "Side Plank Leg Raises",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank-Leg-Raises.gif"
  ],
  [
    "Reverse Plank Kicks",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Plank-Kicks.gif"
  ],
  [
    "Hindu Push-ups",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pike-to-Cobra.gif"
  ],
  [
    "Bear Crawl",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif"
  ],
  [
    "High Knee Skips",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knee-Skips_Cardio.gif"
  ],
  [
    "Double Crunches",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Double-Crunches.gif"
  ],
  [
    "Toe Reaches",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Toe-Reaches.gif"
  ],
  [
    "Sit-ups",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Sit-ups.gif"
  ],
  [
    "Side Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank-1-360x360.png"
  ],
  [
    "Plank Leg Lift",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank-Leg-Lift.gif"
  ],
  [
    "Plank Knee to Elbow",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/PLANK-KNEE-TO-ELBOW.gif"
  ],
  [
    "Russian Twist",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif"
  ],
  [
    "Plank",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/plank.gif"
  ],
  [
    "Leg Pull-in Knee-ups",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Pull-In-Knee-ups.gif"
  ],
  [
    "Glute Bridge",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge-.gif"
  ],
  [
    "Hollow Hold",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/HollowHold-360x360.png"
  ],
  [
    "Long Arm Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Long-Arm-Crunch.gif"
  ],
  [
    "Half Wipers",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Half-Wipers.gif"
  ],
  [
    "Jackknife Sit-ups (V-Up)",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jackknife-Sit-ups.gif"
  ],
  [
    "Flutter Kick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Flutter-Kicks.gif"
  ],
  [
    "Standing side bend",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif"
  ],
  [
    "Suspended Ab Fall-out",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Suspended-Ab-Fall-out.gif"
  ],
  [
    "TRX Mountain Climber",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/TRX-Mountain-Climber.gif"
  ],
  [
    "Side Plank Knee to Elbow",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Side-Plank-Knee-to-Elbow-.gif"
  ],
  [
    "Bodyweight Skull Crushers",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Bodyweight-Skull-Crushers.gif"
  ],
  [
    "Half Cross Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Half-Cross-Crunch.gif"
  ],
  [
    "Cable Seated Twist on Floor",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Cable-Seated-Twist-on-Floor.gif"
  ],
  [
    "Butterfly Sit-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Butterfly-Sit-up.gif"
  ],
  [
    "Push-up With Rotation",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/push-up-with-rotation.gif"
  ],
  [
    "Side Plank Rotation",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Side-Plank-Rotation.gif"
  ],
  [
    "Prone Abdominal Hollowing",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Prone-Abdominal-Hollowing-360x360.png"
  ],
  [
    "Hell Slide",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Hell-Slide.gif"
  ],
  [
    "Half Frog Pose",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Half-Frog-Pose-ardha-bhekasana.gif"
  ],
  [
    "Medicine Ball Crunch",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Medicine-Ball-Crunch.gif"
  ],
  [
    "Kettlebell Figure 8",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Kettlebell-Figure-8.gif"
  ],
  [
    "Ball Russian Twist throw with partner",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Ball-Russian-Twist-throw-with-partner.gif"
  ],
  [
    "Seated Ab Crunch Machine",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Seated-Ab-Crunch-Machine.gif"
  ],
  [
    "Dumbbell Windmill",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Windmill.gif"
  ],
  [
    "Side Lying Feet Raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Side-Lying-Feet-Raise.gif"
  ],
  [
    "Dhanurasana | Rocking Bow Pose",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Dhanurasana-Rocking-Bow-Pose.gif"
  ],
  [
    "Seated Twist With Resistance Band",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Seated-twist.gif"
  ],
  [
    "Twist With Resistance Band",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Twist.gif"
  ],
  [
    "Twist down up With Resistance Band",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Twist-down-up.gif"
  ],
  [
    "Standing Side Bend | Gymstick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Side-Bend.gif"
  ],
  [
    "Banded Lying leg and hip raise",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Lying-leg-and-hip-raise.gif"
  ],
  [
    "Banded Jack knife sit-up",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Jack-knife-sit-up.gif"
  ],
  [
    "Down to Up Twist |Gymstick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Down-to-Up-Twist-Gymstick.gif"
  ],
  [
    "Bicycle Crunch | Gymstick",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Bicycle-Crunch-Gymstick.gif"
  ],
  [
    "Plank Jacks / Extended Leg",
    "abs",
    "https://fitnessprogramer.com/wp-content/uploads/2015/06/Plank-Jacks-Extended-Leg.gif"
  ],
  [
    "Standing Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Calf-Raise.gif"
  ],
  [
    "Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif"
  ],
  [
    "Calf Raise with Resistance Band",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Calf-Raise-with-Resistance-Band.gif"
  ],
  [
    "Barbell Seated Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Barbell-Seated-Calf-Raise.gif"
  ],
  [
    "Leg Press Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Leg-Press-Calf-Raise.gif"
  ],
  [
    "Hack Squat Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Hack-Squat-Calf-Raise.gif"
  ],
  [
    "Lever Seated Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Seated-Calf-Raise.gif"
  ],
  [
    "Single Leg Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Single-Leg-Calf-Raises.gif"
  ],
  [
    "Hack Machine One-Leg Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Hack-Machine-One-Leg-Calf-Raise.gif"
  ],
  [
    "Donkey Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Donkey-Calf-Raise.gif"
  ],
  [
    "Lever Donkey Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Donkey-Calf-Raise.gif"
  ],
  [
    "Bench Press Machine Standing Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Press-Machine-Standing-Calf-Raise.gif"
  ],
  [
    "Standing Cross Leg Hamstring Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Cross-Leg-Hamstring-Stretch.gif"
  ],
  [
    "Standing Barbell Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Barbell-Calf-Raise.gif"
  ],
  [
    "Weighted Donkey Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Weighted-Donkey-Calf-Raise.gif"
  ],
  [
    "Squat Hold Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/12/Squat-Hold-Calf-Raise.gif"
  ],
  [
    "Standing Hamstring Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Hamstring-Stretch.gif"
  ],
  [
    "Weighted Seated Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Weighted-Seated-Calf-Raise.gif"
  ],
  [
    "Foam Roller Calves",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Calves.gif"
  ],
  [
    "Band Foot External Rotation",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Resistance-Band-Foot-External-Rotation.gif"
  ],
  [
    "Toe Extensor Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Toe-Extensor-Stretch.gif"
  ],
  [
    "Standing Dorsiflexion",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Standing-Dorsiflexion.gif"
  ],
  [
    "Standing Wall Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Standing-Wall-Calf-Stretch.gif"
  ],
  [
    "Standing Toe Up Achilles Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Standing-Toe-Up-Achilles-Stretch.gif"
  ],
  [
    "Standing Toe Flexor Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Standing-Toe-Flexor-Stretch.gif"
  ],
  [
    "Standing Gastrocnemius Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Standing-Gastrocnemius-Calf-Stretch.gif"
  ],
  [
    "Single Heel Drop Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Heel-Drop-Calf-Stretch.gif"
  ],
  [
    "Seated Straight Leg Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Straight-Leg-Calf-Stretch.gif"
  ],
  [
    "Lunging Straight Leg Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lunging-Straight-Leg-Calf-Stretch.gif"
  ],
  [
    "Posterior Tibialis Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Posterior-Tibialis-Stretch.gif"
  ],
  [
    "Foot and Ankles Stretches",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foot-and-Ankles-Stretches.gif"
  ],
  [
    "Foot and Ankle Rotation",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Feet-and-Ankle-Rotation.gif"
  ],
  [
    "Calves Stretch Static Position",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Calves-Stretch-Static-Position.gif"
  ],
  [
    "Single Leg Calves Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Leg-Calves-Stretch.gif"
  ],
  [
    "Calf Stretch With Rope",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Calf-Stretch-with-Rope.gif"
  ],
  [
    "Crouching Heel Back Calf Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Crouching-Heel-Back-Calf-Stretch.gif"
  ],
  [
    "Seated Calf Press on Leg Press Machine",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Calf-Press-on-Leg-Press-Machine.gif"
  ],
  [
    "Single Calf Raise on Leg Press Machine",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Calf-Raise-on-Leg-Press-Machine.gif"
  ],
  [
    "Inner Thigh Side Stretch",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/INNER-THIGH-SIDE-STRETCH.gif"
  ],
  [
    "Single Leg Donkey Calf Raise",
    "calf",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Single-Leg-Donkey-Calf-Raise.gif"
  ],
  [
    "Dumbbell Good Morning",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif"
  ],
  [
    "Dumbbell Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-deadlifts.gif"
  ],
  [
    "Dumbbell Sumo Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-sumo-deadlift.gif"
  ],
  [
    "Seated Back Extension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/seated-back-extension.gif"
  ],
  [
    "Barbell Bent Over Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif"
  ],
  [
    "Bent Over Dumbbell Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif"
  ],
  [
    "Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif"
  ],
  [
    "Romanian Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif"
  ],
  [
    "Sphinx Stretch",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Sphinx-Stretch.gif"
  ],
  [
    "Good Morning",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Good-Morning.gif"
  ],
  [
    "Weighted Back Extension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Weighted-Back-Extension.gif"
  ],
  [
    "Dumbbell Romanian Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif"
  ],
  [
    "Sumo Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Sumo-Deadlift.gif"
  ],
  [
    "Dumbbell Straight Leg Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif"
  ],
  [
    "Seated Hamstring Stretch",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Hamstring-Stretch.gif"
  ],
  [
    "Kettlebell Single Leg Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Kettlebell-Single-Leg-Deadlift.gif"
  ],
  [
    "Hyperextension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/hyperextension.gif"
  ],
  [
    "Floor Hyperextension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Floor-Hyperextension-1.gif"
  ],
  [
    "Flat Bench Hyperextension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Flat-Bench-Hyperextension.gif"
  ],
  [
    "Reverse Hyperextension Machine",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Reverse-Hyperextension-Machine.gif"
  ],
  [
    "T-Bar Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif"
  ],
  [
    "Smith Machine Good Morning",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Good-Morning.gif"
  ],
  [
    "Cable Pull Through",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cable-Pull-Through.gif"
  ],
  [
    "Twisting Hyperextension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Twisting-Hyperextension.gif"
  ],
  [
    "Swimming",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Swimming.gif"
  ],
  [
    "Frog Reverse Hyperextension",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Reverse-Hyperextensions.gif"
  ],
  [
    "Bird Dog",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Bird-Dog.gif"
  ],
  [
    "Seated Cable Rope Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Cable-Rope-Row.gif"
  ],
  [
    "Kettlebell Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-deadlift.gif"
  ],
  [
    "Standing Toe Touches",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Toe-Touches.gif"
  ],
  [
    "Seated Toe Touches",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Toe-Touches.gif"
  ],
  [
    "Foam Roller Back Stretch",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Roll-Upper-Back.gif"
  ],
  [
    "Lying Upper Body Rotation",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Upper-Body-Rotation.gif"
  ],
  [
    "Stiff Leg Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Stiff-Leg-Deadlift.gif"
  ],
  [
    "Kneeling Back Rotation",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Back-Rotation-Stretch.gif"
  ],
  [
    "Bow Pose",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bow-Yoga-Pose.gif"
  ],
  [
    "Cat Cow Pose",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/cat-cow.gif"
  ],
  [
    "Kneeling T-spine Rotation",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Kneeling-T-spine-Rotation.gif"
  ],
  [
    "Supine Spinal Twist",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Supine-Spinal-Twist.gif"
  ],
  [
    "Landmine T-Bar Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif"
  ],
  [
    "Barbell Pendlay Row",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Barbell-Pendlay-Row.gif"
  ],
  [
    "Superman",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman-exercise.gif"
  ],
  [
    "Hindu Push-ups",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pike-to-Cobra.gif"
  ],
  [
    "Arm Leg Raises",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/arm-leg-raise.gif"
  ],
  [
    "Dumbbell Pull Through",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Dumbbell-Pull-Through.gif"
  ],
  [
    "Glute Ham Raise",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/Glute-Ham-Raise.gif"
  ],
  [
    "Push-up With Rotation",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/push-up-with-rotation.gif"
  ],
  [
    "Side Plank Rotation",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Side-Plank-Rotation.gif"
  ],
  [
    "Kettlebell Figure 8",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Kettlebell-Figure-8.gif"
  ],
  [
    "Barbell Single Leg Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Barbell-Single-Leg-Deadlift.gif"
  ],
  [
    "Dumbbell Single Leg Deadlift",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbbell-Single-Leg-Deadlift.gif"
  ],
  [
    "Good Morning With Resistance Band",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Good-Morning-With-Resistance-Band.gif"
  ],
  [
    "Rolling Like a Ball",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Rolling-Like-a-Ball-crab.gif"
  ],
  [
    "Dhanurasana | Rocking Bow Pose",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Dhanurasana-Rocking-Bow-Pose.gif"
  ],
  [
    "Swing | Gymstick",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Swing-Gymstick.gif"
  ],
  [
    "Single Leg Reverse Hyperextension | Gymstick",
    "erector-spinae",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Single-Leg-Reverse-Hyperextension.gif"
  ],
  [
    "Dumbbell Goblet Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif"
  ],
  [
    "Curtsy Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/curtsy-lunge.gif"
  ],
  [
    "5 Dot Drills",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/12/5-Dot-drills-agility-exercise.gif"
  ],
  [
    "High Knee Lunge on Bosu Ball",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/High-Knee-Lunge-on-Bosu-Ball.gif"
  ],
  [
    "Standing Leg Circles",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Standing-Leg-Circles.gif"
  ],
  [
    "Static Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Static-Lunge.gif"
  ],
  [
    "Dumbbell Walking Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif"
  ],
  [
    "Dumbbell Good Morning",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif"
  ],
  [
    "Dumbbell Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Dumbbell-Squat.gif"
  ],
  [
    "Depth Jump to Hurdle Hop",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Depth-Jump-to-Hurdle-Hop.gif"
  ],
  [
    "Power Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/power-lunge.gif"
  ],
  [
    "Dumbbell Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-deadlifts.gif"
  ],
  [
    "Dumbbell Sumo Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-sumo-deadlift.gif"
  ],
  [
    "Bodyweight Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/bodyweight-lunges.gif"
  ],
  [
    "Bulgarian Split Squat Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/03/Bulgarian-Jump-Squat.gif"
  ],
  [
    "Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif"
  ],
  [
    "Leg Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif"
  ],
  [
    "Plie Dumbbell Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Sumo-Plie-Dumbbell-Squat.gif"
  ],
  [
    "Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif"
  ],
  [
    "Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif"
  ],
  [
    "Seated Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif"
  ],
  [
    "Leg Extension",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif"
  ],
  [
    "Romanian Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif"
  ],
  [
    "Barbell Hack Squats",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hack-Squat.gif"
  ],
  [
    "Barbell Sumo Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-sumo-squat.gif"
  ],
  [
    "Good Morning",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Good-Morning.gif"
  ],
  [
    "Dumbbell Bulgarian Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif"
  ],
  [
    "Dumbbell Romanian Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif"
  ],
  [
    "Hack Squats Machine",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Sled-Hack-Squat.gif"
  ],
  [
    "Sumo Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Sumo-Deadlift.gif"
  ],
  [
    "Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pistol-Squat.gif"
  ],
  [
    "Dumbbell Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif"
  ],
  [
    "Dumbbell Straight Leg Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif"
  ],
  [
    "Lever Side Hip Abduction",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lever-Side-Hip-Abduction.gif"
  ],
  [
    "Bodyweight Sumo Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/BODYWEIGHT-SUMO-SQUAT.gif"
  ],
  [
    "Hawaiian Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Hawaiian-Squat-exercise.gif"
  ],
  [
    "Lever Standing Leg Raise",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Standing-Leg-Raise.gif"
  ],
  [
    "Lever Side Hip Adduction",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lever-Side-Hip-Adduction.gif"
  ],
  [
    "Barbell Bulgarian Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Barbell-Bulgarian-Split-Squat.gif"
  ],
  [
    "Lever Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lever-Deadlift.gif"
  ],
  [
    "Dumbbell Rear Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Rear-Lunge.gif"
  ],
  [
    "Barbell Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Barbell-Lunge.gif"
  ],
  [
    "Barbell Lateral Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Barbell-Lateral-Lunge.gif"
  ],
  [
    "Side Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif"
  ],
  [
    "Cable Hip Adduction",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Hips-Adduction.gif"
  ],
  [
    "Zig Zag Hops Plyometric",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Zig-Zag-Hops-Plyometric.gif"
  ],
  [
    "Bodyweight Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Squat.gif"
  ],
  [
    "Upavistha Konasana",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Upavistha-Konasana.gif"
  ],
  [
    "Seated Hamstring Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Hamstring-Stretch.gif"
  ],
  [
    "Kneeling Quad Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Kneeling-Quad-Stretch.gif"
  ],
  [
    "Lateral Speed Step",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lateral-Speed-Step.gif"
  ],
  [
    "Seated Groin / Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Adductor-Groin-Stretch.gif"
  ],
  [
    "Reverse Lunge Knee Lift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Reverse-Lunge-Knee.gif"
  ],
  [
    "Lying Hamstring Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Hamstrings-Lying-Stretch.gif"
  ],
  [
    "Curtsy Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Curtsey-Squat.gif"
  ],
  [
    "Cable Goblet Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Squat.gif"
  ],
  [
    "Thigh fly (Adductor Magnus Stretch)",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Adductor-Magnus-Stretch.gif"
  ],
  [
    "Split Jump Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Split-Squat.gif"
  ],
  [
    "Cossack Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Cossack-Squat.gif"
  ],
  [
    "Seated Side Crunch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Side-Crunches.gif"
  ],
  [
    "Standing Cross Leg Hamstring Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Cross-Leg-Hamstring-Stretch.gif"
  ],
  [
    "Backward Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Backward-Jumping.gif"
  ],
  [
    "Jumping jack",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Jumping-jack.gif"
  ],
  [
    "Single Leg Broad Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Single-Leg-Broad-Jump.gif"
  ],
  [
    "Bodyweight Windmill",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Windmill.gif"
  ],
  [
    "Jump Squats",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Squat.gif"
  ],
  [
    "Landmine Squat to Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Landmine-Press.gif"
  ],
  [
    "Barbell Clean and Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Clean-and-Press-.gif"
  ],
  [
    "Dumbbell Lateral Step Up",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Lateral-Step-Up.gif"
  ],
  [
    "Lateral Step-up",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lateral-Step-up.gif"
  ],
  [
    "Step Up + Opposite Elbow to Knee Twist",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Step-Up-Opposite-Elbow-to-Knee-Twist.gif"
  ],
  [
    "Barbell Step-Up",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Step-Up.gif"
  ],
  [
    "Lying Glute Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lying-glute-stretch.gif"
  ],
  [
    "Lying Dumbbell Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-Dumbbell-Leg-Curl.gif"
  ],
  [
    "Plank With Arm And Leg Lift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Plank-with-Arm-and-Leg-Lift.gif"
  ],
  [
    "Weighted Front Plank",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif"
  ],
  [
    "Smith Machine Good Morning",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Good-Morning.gif"
  ],
  [
    "Bodyweight Walking Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/bodyweight-walking-lunge.gif"
  ],
  [
    "Wall Sit",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Wall-Sit-238x360.png"
  ],
  [
    "High Knee Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/11/High-Knee-Squat.gif"
  ],
  [
    "Kettlebell Pistol Squats",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Pistol-Squats.gif"
  ],
  [
    "Kettlebell Split Snatch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Split-Snatch.gif"
  ],
  [
    "Kettlebell Swings",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif"
  ],
  [
    "Bodyweight Box Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Bodyweight-Box-Squat.gif"
  ],
  [
    "Step Up Single Leg Balance with Bicep Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Step-Up-Single-Leg-Balance-with-Bicep-Curl.gif"
  ],
  [
    "Dumbbell Step-Up",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/12/Dumbeel-Step-Up.gif"
  ],
  [
    "Belt Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/belt-squat.gif"
  ],
  [
    "Lever Single Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Single-Leg-Curl.gif"
  ],
  [
    "Reverse Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/bodyweight-reverse-lunge.gif"
  ],
  [
    "Single Leg Step Down",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Single-Leg-Step-Down.gif"
  ],
  [
    "Boat Pose",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Boat-Pose-Stretch.gif"
  ],
  [
    "Long Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/Long-Jump-Plyometrics.gif"
  ],
  [
    "Lever Assisted Single Leg Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lever-Assisted-Leg-Press.gif"
  ],
  [
    "Nordic Hamstring Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Nordic-Hamstring-Curl.gif"
  ],
  [
    "One Arm Kettlebell Snatch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/One-Arm-Kettlebell-Snatch-exercise.gif"
  ],
  [
    "Front Plank With Arm And Leg Lift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Front-Plank-With-Arm-And-Leg-Lift.gif"
  ],
  [
    "Horizontal Leg Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Horizontal-Leg-Press.gif"
  ],
  [
    "Resistance Band Toe Touch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Resistance-Band-Toe-Touch.gif"
  ],
  [
    "Kneeling Hip Flexor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Kneeling-Hip-Flexor-Stretch.gif"
  ],
  [
    "Standing Quadriceps Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-Quadriceps-Stretch.gif"
  ],
  [
    "Exercise Ball Wall Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Exercise-Ball-Wall-Squat.gif"
  ],
  [
    "Leg Curl On Stability Ball",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/leg-curl-on-stability-ball.gif"
  ],
  [
    "Kettlebell Clean and Jerk",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Kettlebell-Clean-and-Jerk.gif"
  ],
  [
    "Kettlebell Goblet Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-goblet-squat.gif"
  ],
  [
    "Kettlebell Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-deadlift.gif"
  ],
  [
    "Barbell Bench Front Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Bench-Front-Squat.gif"
  ],
  [
    "Standing Toe Touches",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Toe-Touches.gif"
  ],
  [
    "Standing Side Toe Touching",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Side-Toe-Touching.gif"
  ],
  [
    "Dumbbell Split Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dumbbell-Split-Jump.gif"
  ],
  [
    "Banded Step-up",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Banded-Step-up.gif"
  ],
  [
    "Barbell Curtsey Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Barbell-Curtsey-Lunge.gif"
  ],
  [
    "Dumbbell Jump Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dumbbell-Jump-Squat.gif"
  ],
  [
    "Barbell Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Barbell-Split-Squat.gif"
  ],
  [
    "All Fours Squad Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/All-Fours-Squad-Stretch.gif"
  ],
  [
    "Burpees",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/burpees.gif"
  ],
  [
    "Lever Kneeling Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Kneeling-Leg-Curl-.gif"
  ],
  [
    "Seated Toe Touches",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Toe-Touches.gif"
  ],
  [
    "Reverse Hack Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Reverse-Hack-Squat.gif"
  ],
  [
    "Duck Walk",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Duck-Walk.gif"
  ],
  [
    "Trap Bar Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Trap-Bar-Deadlift.gif"
  ],
  [
    "Zercher Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Zercher-Squat.gif"
  ],
  [
    "Front Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/front-squat.gif"
  ],
  [
    "Standing Hamstring Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Hamstring-Stretch.gif"
  ],
  [
    "Kettlebell Thruster",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Kettlebell-Thruster.gif"
  ],
  [
    "One Arm Dumbbell Snatch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/One-Arm-Dumbbell-Snatch.gif"
  ],
  [
    "Single Leg Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Single-Leg-Press.gif"
  ],
  [
    "Landmine Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Landmine-Lunge.gif"
  ],
  [
    "Single Leg Extension",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Single-Leg-Extension.gif"
  ],
  [
    "Smith Machine Leg Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Smith-Machine-Leg-Press.gif"
  ],
  [
    "Smith Machine Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Smith-Machine-Lunge.gif"
  ],
  [
    "Skater Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Skater-Squat.gif"
  ],
  [
    "Shrimp Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/shrimp-squats.gif"
  ],
  [
    "Towel Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Towel-Leg-Curl.gif"
  ],
  [
    "Foam Roller IT (iliotibial Band) Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-IT-iliotibial-Band-Stretch.gif"
  ],
  [
    "Foam Roller Quads",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Quads.gif"
  ],
  [
    "Foam Roller Inner Thigh Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Inner-Thigh-Adductor-Stretch.gif"
  ],
  [
    "Foam Roller Hamstrings",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Hamstrings.gif"
  ],
  [
    "Foam Roller Plantar Fasciitis",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Foam-Roller-Plantar-Fasciitis.gif"
  ],
  [
    "90/90 Hip Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/90-90-Hip-Stretch.gif"
  ],
  [
    "Stiff Leg Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/01/Stiff-Leg-Deadlift.gif"
  ],
  [
    "Dumbbell Goblet Curtsey Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Goblet-Curtsey-Lunge.gif"
  ],
  [
    "Cable Forward Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Forward-Lunge.gif"
  ],
  [
    "Cable Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Lunge.gif"
  ],
  [
    "Cable Front Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Front-Squat.gif"
  ],
  [
    "Bodyweight Kneeling Sissy Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Bodyweight-Kneeling-Sissy-Squat.gif"
  ],
  [
    "Trap Bar Jump Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/trap-bar-jump-squat.gif"
  ],
  [
    "Box Jump to Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-to-Pistol-Squat.gif"
  ],
  [
    "Box Jump 2 to 1",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-2-to-1.gif"
  ],
  [
    "Box Jump 1 to 2",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-1-to-2.gif"
  ],
  [
    "Single Leg Box Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Single-Leg-Box-Jump.gif"
  ],
  [
    "Bow Pose",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bow-Yoga-Pose.gif"
  ],
  [
    "Seated Straight Leg Calf Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Straight-Leg-Calf-Stretch.gif"
  ],
  [
    "Crouching Heel Back Calf Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Crouching-Heel-Back-Calf-Stretch.gif"
  ],
  [
    "Barbell Jump Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Barbell-Jump-Squat.gif"
  ],
  [
    "Frog Pose",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Frog-Pose-mandukasana.gif"
  ],
  [
    "ATG Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/ATG-Split-Squat.gif"
  ],
  [
    "Kettlebell Clean and Press",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Kettlebell-Clean-and-Press.gif"
  ],
  [
    "Seated Piriformis Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Seated-Piriformis-Stretch.gif"
  ],
  [
    "Barbell Pin Front Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Barbell-Pin-Squat.gif"
  ],
  [
    "Heel Touch Side Kick Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Heel-Touch-Side-Kick-Squat.gif"
  ],
  [
    "Decline Bench Dumbbell Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Decline-Bench-Dumbbell-Lunge.gif"
  ],
  [
    "Lateral Leg Swings",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Lateral-Leg-Swings.gif"
  ],
  [
    "Banded Walk",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Banded-Walk.gif"
  ],
  [
    "Resistance Band Lateral Walk",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Resistance-Band-Lateral-Walk.gif"
  ],
  [
    "Kneeling Jump Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Kneeling-Jump-Squat.gif"
  ],
  [
    "Banded Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Banded-Split-Squat.gif"
  ],
  [
    "Banded Kettlebell Goblet Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Banded-Kettlebell-Goblet-Squat.gif"
  ],
  [
    "Banded Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Banded-Lunge.gif"
  ],
  [
    "Banded Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Banded-Leg-Curl.gif"
  ],
  [
    "Standing Single Leg Curl Machine",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Standing-Single-Leg-Curl-Machine.gif"
  ],
  [
    "Decline Dumbbell Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Decline-Dumbbell-Leg-Curl.gif"
  ],
  [
    "Kettlebell Front Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Kettlebell-front-squat.gif"
  ],
  [
    "Single Knee To Chest",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Single-Knee-To-Chest-Stretch.gif"
  ],
  [
    "Pistol Squat to Box",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Pistol-Squat-to-Box.gif"
  ],
  [
    "Landmine Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Landmine-Deadlift.gif"
  ],
  [
    "Landmine Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Landmine-Squat.gif"
  ],
  [
    "Sissy Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/sissy-squat.gif"
  ],
  [
    "Rack Pull",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/08/barbell-rack-pull.gif"
  ],
  [
    "Standing Knee Hugs",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/STANDING-KNEE-HUGS.gif"
  ],
  [
    "Step Up with Knee Raises",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-up.gif"
  ],
  [
    "Snap Jumps",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/SNAP-JUMPS.gif"
  ],
  [
    "Piriformis Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Piriformis-Stretch.gif"
  ],
  [
    "Half Kneeling Hip Flexor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Hip-Flexor-Stretch-1-360x360.png"
  ],
  [
    "High Knee Run",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/High-Knee-Run.gif"
  ],
  [
    "High Knee Skips",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knee-Skips_Cardio.gif"
  ],
  [
    "Inner Thigh Side Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/INNER-THIGH-SIDE-STRETCH.gif"
  ],
  [
    "Skater",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skater.gif"
  ],
  [
    "Butterfly Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Butterfly-Stretch.gif"
  ],
  [
    "Dumbbell Forward Leaning Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/dumbbell-forward-leaning-lunge.gif"
  ],
  [
    "Dumbbell Reverse Lunge",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbell-reverse-lunge.gif"
  ],
  [
    "Dumbbell Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbell-Pistol-Squat.gif"
  ],
  [
    "Bodyweight Bulgarian Split Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Bodyweight-Bulgarian-Split-Squat.gif"
  ],
  [
    "Dumbbell Sumo Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/dumbbell-sumo-squat.gif"
  ],
  [
    "Hip Adduction Machine",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/HIP-ADDUCTION-MACHINE.gif"
  ],
  [
    "Hip Abduction Machine",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/HiP-ABDUCTION-MACHINE.gif"
  ],
  [
    "Seated Banded Leg Extension",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Seated-Banded-Leg-Extension.gif"
  ],
  [
    "Zercher Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/zercher-deadlift.gif"
  ],
  [
    "Supported Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Supported-Pistol-Squat.gif"
  ],
  [
    "Barbell Thruster",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/thruster.gif"
  ],
  [
    "Dumbbell Pull Through",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Dumbbell-Pull-Through.gif"
  ],
  [
    "Jefferson Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/jefferson-squat.gif"
  ],
  [
    "Glute Ham Raise",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/07/Glute-Ham-Raise.gif"
  ],
  [
    "TRX Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/TRX-Pistol-Squat.gif"
  ],
  [
    "Sitting Wide Leg Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Sitting-Wide-Leg-Adductor-Stretch.gif"
  ],
  [
    "Standing Wide Knees Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Standing-Wide-Knees-Adductor-Stretch.gif"
  ],
  [
    "Standing Wide Leg Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Standing-Wide-Leg-Adductor-Stretch.gif"
  ],
  [
    "Knee Circles",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Knee-Circles.gif"
  ],
  [
    "Resistance Band Overhead Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/Resistance-Band-Overhead-Squat.gif"
  ],
  [
    "Hell Slide",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Hell-Slide.gif"
  ],
  [
    "Wall Ball",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/01/wall-ball.gif"
  ],
  [
    "Kneeling Leg Out Adductor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Kneeling-Leg-Out-Adductor-Stretch.gif"
  ],
  [
    "Half Frog Pose",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Half-Frog-Pose-ardha-bhekasana.gif"
  ],
  [
    "Happy Baby Pose",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/12/Happy-Baby-Pose.gif"
  ],
  [
    "Kettlebell Figure 8",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Kettlebell-Figure-8.gif"
  ],
  [
    "Barbell Single Leg Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Barbell-Single-Leg-Deadlift.gif"
  ],
  [
    "Dumbbell Single Leg Deadlift",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbbell-Single-Leg-Deadlift.gif"
  ],
  [
    "Seated Leg Extension with Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Seated-Leg-Extension-with-Resistance-Band.gif"
  ],
  [
    "Good Morning With Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Good-Morning-With-Resistance-Band.gif"
  ],
  [
    "Dumbbell Bench Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/dumbbell-bench-squat.gif"
  ],
  [
    "Pendulum Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Pendulum-Squat.gif"
  ],
  [
    "Dumbbell Iron Cross",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Dumbbell-Iron-Cross.gif"
  ],
  [
    "Box Pistol Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Box-pistol-Squat.gif"
  ],
  [
    "Sitting Rotation Hip Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Sitting-Rotation-Hip-Stretch.gif"
  ],
  [
    "Supported One Leg Standing Hip Flexor And Knee Extensor Stretch",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Supported-One-Leg-Standing-Hip-Flexor-And-Knee-Extensor-Stretch.gif"
  ],
  [
    "Squat mobility Complex",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Squat-mobility-Complex.gif"
  ],
  [
    "Standing Straight Leg Raise With Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-straight-leg-raise.gif"
  ],
  [
    "Standing Leg Raise With Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-Leg-Raise.gif"
  ],
  [
    "Standing Leg Extension With Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-leg-extension.gif"
  ],
  [
    "Standing Leg Curl With Resistance Band",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-leg-curl.gif"
  ],
  [
    "Split Squat | Gymstick",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Split-Squat-Gymstick.gif"
  ],
  [
    "Squat | Gymstick",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Squat-Gymstick.gif"
  ],
  [
    "Banded Lying Leg Curl",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Lying-leg-curl.gif"
  ],
  [
    "Lying Alternate Leg Press | Gymstick",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2022/05/Lying-Alternate-Leg-Press.gif"
  ],
  [
    "Pin Squat",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2023/05/Pin-Squat.gif"
  ],
  [
    "The Box Jump",
    "leg",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/The-Box-Jump.gif"
  ],
  [
    "5 Dot Drills",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/12/5-Dot-drills-agility-exercise.gif"
  ],
  [
    "Navy Seal Burpee",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/10/Navy-Seal-Burpee.gif"
  ],
  [
    "Depth Jump to Hurdle Hop",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/Depth-Jump-to-Hurdle-Hop.gif"
  ],
  [
    "Power Lunge",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/power-lunge.gif"
  ],
  [
    "Shadow Boxing",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif"
  ],
  [
    "Riding Outdoor Bicycle",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Riding-Outdoor-Bicycle.gif"
  ],
  [
    "Walking",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Walking.gif"
  ],
  [
    "Briskly Walking",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Briskly-Walking.gif"
  ],
  [
    "Running",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/07/Run.gif"
  ],
  [
    "Sprint",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/sprint.gif"
  ],
  [
    "Walk Wave Machine",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Walk-Wave-Machine.gif"
  ],
  [
    "Jump Rope",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif"
  ],
  [
    "Bike",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Bike.gif"
  ],
  [
    "Treadmill",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Treadmill-.gif"
  ],
  [
    "Incline Treadmill",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Treadmill.gif"
  ],
  [
    "Rowing Machine",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif"
  ],
  [
    "Manual Treadmill",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Assault-Air-Runner.gif"
  ],
  [
    "Elliptical Machine",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Elliptical-Machine.gif"
  ],
  [
    "Stair Climber Machine",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Walking-on-Stepmill.gif"
  ],
  [
    "Elbow To Knee Twists",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Elbow-To-Knee-Twists.gif"
  ],
  [
    "Push-up Toe Touch",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Push-up-Toe-Touch.gif"
  ],
  [
    "Mountain Climber",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif"
  ],
  [
    "Bicycle Crunch",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif"
  ],
  [
    "T-Cross Sit-up",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/T-Cross-Sit-up.gif"
  ],
  [
    "Power Skips",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Power-Skips.gif"
  ],
  [
    "Plyo Jacks",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Plyo-Jacks.gif"
  ],
  [
    "Split Jacks",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Split-Jacks.gif"
  ],
  [
    "Butt Kicks",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Butt-Kicks.gif"
  ],
  [
    "Fast Feet Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Fast-Feet-Run.gif"
  ],
  [
    "Wheel Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Wheel-Run.gif"
  ],
  [
    "Zig Zag Hops Plyometric",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Zig-Zag-Hops-Plyometric.gif"
  ],
  [
    "Bodyweight Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Squat.gif"
  ],
  [
    "Lateral Speed Step",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Lateral-Speed-Step.gif"
  ],
  [
    "Curtsy Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Curtsey-Squat.gif"
  ],
  [
    "Split Jump Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Split-Squat.gif"
  ],
  [
    "Backward Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Backward-Jumping.gif"
  ],
  [
    "Jumping jack",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Jumping-jack.gif"
  ],
  [
    "Single Leg Broad Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Single-Leg-Broad-Jump.gif"
  ],
  [
    "Spider Plank",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Spider-Plank.gif"
  ],
  [
    "Run in Place",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Run-in-Place-exercise.gif"
  ],
  [
    "Jump Squats",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Squat.gif"
  ],
  [
    "Short Stride Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Short-Stride-Run.gif"
  ],
  [
    "Lateral Step-up",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Lateral-Step-up.gif"
  ],
  [
    "Step Up + Opposite Elbow to Knee Twist",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Step-Up-Opposite-Elbow-to-Knee-Twist.gif"
  ],
  [
    "Band Assisted Sprinter Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Band-Assisted-Sprinter-Run.gif"
  ],
  [
    "Backward Running",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Backwards-Running.gif"
  ],
  [
    "Side Shuttle",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Side-Shuttle.gif"
  ],
  [
    "Tuck Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Tuck-Jump.gif"
  ],
  [
    "High Knee Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/11/High-Knee-Squat.gif"
  ],
  [
    "Boxer Shuffle Cardio",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Boxer-Shuffle-Cardio.gif"
  ],
  [
    "Jab Boxing",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/10/Jab-Boxing.gif"
  ],
  [
    "Punches",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Punches.gif"
  ],
  [
    "Right Uppercut",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Right-Uppercut-Boxing.gif"
  ],
  [
    "Right Cross",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/08/Right-Cross-Boxing.gif"
  ],
  [
    "Hook Kick",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Hook-Kick-Kickboxing-with-boxing-bag.gif"
  ],
  [
    "Boxing Right Cross",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Boxing-Right-Cross-with-boxing-bag.gif"
  ],
  [
    "Walking High Knee Lunges",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Walking-High-Knee-Lunges.gif"
  ],
  [
    "High Knees Lift Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/Run-in-Place.gif"
  ],
  [
    "Jack Burpees",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/10/Jack-Burpees.gif"
  ],
  [
    "Astride Jumps",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/05/Astride-Jumps.gif"
  ],
  [
    "Long Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/03/Long-Jump-Plyometrics.gif"
  ],
  [
    "Front Plank With Arm And Leg Lift",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/Front-Plank-With-Arm-And-Leg-Lift.gif"
  ],
  [
    "Kettlebell Clean and Jerk",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Kettlebell-Clean-and-Jerk.gif"
  ],
  [
    "Dumbbell Burpees",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Burpees.gif"
  ],
  [
    "Ski Step",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Ski-Step.gif"
  ],
  [
    "Dumbbell Split Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dumbbell-Split-Jump.gif"
  ],
  [
    "Dumbbell Jump Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/04/Dumbbell-Jump-Squat.gif"
  ],
  [
    "Burpees",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/burpees.gif"
  ],
  [
    "Vibration Plate",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/06/Vibrate-Plate-Standing.gif"
  ],
  [
    "High Knees Against Wall",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/09/High-Knees-against-wall.gif"
  ],
  [
    "Vertical Mountain Climber",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/07/Vertical-Mountain-Climber.gif"
  ],
  [
    "Single Leg Hip Thrust Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Leg-Hip-Thrust-Jump.gif"
  ],
  [
    "Cross Body Push-up",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cross-Body-Push-up_Plyometric.gif"
  ],
  [
    "Box Jump to Pistol Squat",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-to-Pistol-Squat.gif"
  ],
  [
    "Box Jump 2 to 1",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-2-to-1.gif"
  ],
  [
    "Box Jump 1 to 2",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Box-Jump-1-to-2.gif"
  ],
  [
    "Single Leg Box Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/02/Single-Leg-Box-Jump.gif"
  ],
  [
    "Stationary Bike Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Stationary-Bike-Run.gif"
  ],
  [
    "Hands Bike",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Hands-Bike.gif"
  ],
  [
    "Squat Tuck Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/02/Squat-Tuck-Jump.gif"
  ],
  [
    "1-2 Stick Drill",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2023/04/1-2-Stick-Drill-Plyometrics.gif"
  ],
  [
    "Step Up with Knee Raises",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-up.gif"
  ],
  [
    "Snap Jumps",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/SNAP-JUMPS.gif"
  ],
  [
    "Bear Crawl",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif"
  ],
  [
    "High Knee Run",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/08/High-Knee-Run.gif"
  ],
  [
    "High Knee Skips",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knee-Skips_Cardio.gif"
  ],
  [
    "Skater",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skater.gif"
  ],
  [
    "Assault AirBike",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Assault-AirBike.gif"
  ],
  [
    "Recumbent Exercise Bike",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2022/06/Recumbent-Exercise-Bike.gif"
  ],
  [
    "The Box Jump",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/The-Box-Jump.gif"
  ],
  [
    "Battle Rope",
    "cardio",
    "https://fitnessprogramer.com/wp-content/uploads/2015/07/Battle-Rope.gif"
  ]
];

export const EXERCISES: ExerciseData[] = RAW_EXERCISES.map(([name, bodyPart, gifUrl]) => ({
  name,
  bodyPart,
  gifUrl
}));
