export const EXPERIENCE = [
  {
    company: 'GAMMA Lab',
    role: 'Autonomous Navigation Research Assistant',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://gamma.umd.edu/',
    bullets: [
      'Generated 3D point cloud maps from LiDAR, GPS, IMU, and camera sensor data using SLAM algorithms',
      'Filtered point clouds with RANSAC plane fitting to remove ground points and isolate obstacles',
      'Annotated processed maps according to traversability, creating a labeled and trainable dataset for navigation',
    ],
    notes: [
      'Expected IEEE ICRA Publication: September 2024',
    ]
  },
  {
    company: 'Rajeev Barua Lab',
    role: 'Malware Analysis Research Intern',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://ece.umd.edu/clark/faculty/361/Rajeev-Barua',
    bullets: [
      'Designed a dynamic analysis program to extract the original binary code from an encrypted malware executable',
      'Reduced execution times by 90% by skipping over all non-branching instructions, dodging evasive malware tactics',
    ],
  },
  {
    company: 'Gamera-S',
    role: 'Electronics Team Member',
    start_date: 'Sep. 2023',
    end_date: 'Dec. 2023',
    location: 'College Park, MD',
    link: 'https://gamera.umd.edu/',
    bullets: [
      'Modeled a thrust stand to collect statistics about the helicopter’s flight by utilizing Arduino sensors',
      'Gained insight into the propellers’ performance by determining their drag and lift from a quadratic regression curve',
    ],
  },
]
