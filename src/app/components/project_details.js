export const projects = [
  {
    id: 1,
    title: "SwipeSight",
    date: "September 1, 2025",
    slug: "swipe_sight",
    tags: ["React Native", "UI", "Algorithm", "Recommendation"],
    content: `
SwipeSight is a React Native mobile application designed to provide a personalized and engaging image discovery experience. At its core, it uses a content-based recommendation system to understand user preferences and deliver tailored image suggestions. 

When a user opens the app, they are presented with a series of random images. Users can swipe right to indicate they like an image or swipe left to indicate a dislike. 
Each interaction is recorded and fed into a weighted recommendation algorithm that gradually learns the user’s tastes. 

The app doesn’t just display images randomly — it dynamically adapts to the user’s behavior. 
After a certain number of swipes, typically around ten, the algorithm begins to identify patterns in user interest and starts showing more relevant images. 
This approach ensures that users are consistently presented with content they enjoy, keeping the experience fresh and engaging. 

SwipeSight also focuses heavily on smooth and intuitive UI transitions, creating a seamless swiping experience similar to popular swipe-based applications. 
Behind the scenes, asynchronous data handling ensures that images load quickly without lag, even as the recommendation engine updates in real time. 
The combination of intelligent learning algorithms and user-friendly design makes SwipeSight not only an image recommendation app but also an interactive tool that evolves with the user’s preferences over time.
`,

    repo: "https://github.com/vishwavijeth/swipesight",
  },
  {
    id: 2,
    title: "Relief Link",
    date: "August 7, 2025",
    slug: "relief_link",
    tags: ["Python", "Django", "PostgreSQL", "Backend"],
    content: `
Relief Link is a Python Django application built with SQLite that aims to streamline disaster relief efforts during natural calamities. 
The platform is designed to connect people in need with organizations or individuals willing to provide aid, ensuring timely and efficient assistance. 

The application supports two types of users: requesters and providers. 
Requesters are individuals or communities affected by a disaster who require help, while providers are organizations or volunteers who offer resources and support. 
Requesters can submit requests specifying the type of assistance they need, such as food, shelter, medicine, or transportation, along with an urgency level categorized as low, medium, or critical. 

Providers can browse these requests and select which ones they can fulfill. 
Once a provider picks a request, they can reach out to the requester directly. 
Both types of users have dedicated dashboards: requesters can track who has accepted their requests, while providers can manage the requests they have taken on and see detailed information about what they need to provide. 

The platform emphasizes reliability and clear communication, ensuring that urgent needs are addressed promptly. 
By bridging the gap between those in need and those who can help, Relief Link transforms disaster response into an organized, efficient, and transparent process. 
It demonstrates how technology can play a crucial role in saving lives and providing timely support during critical situations.
`,

    repo: "https://github.com/vishwavijeth/relief-link",
  },
  {
    id: 3,
    title: "Course Recommendation",
    date: "November 30, 2024",
    slug: "course_recommendation",
    tags: ["Python", "AI", "Streamlit", "Algorithm", "Recommendation"],
    content: `
Course-Recommender is an AI-powered course recommendation system built using Python and Streamlit, designed to help users discover online courses tailored to their preferences and learning goals. 
The system combines multiple recommendation algorithms, including content-based and collaborative filtering, to provide highly relevant course suggestions. 

The project workflow begins with Exploratory Data Analysis (EDA) to understand the dataset, analyzing course popularity, user enrollments, and merging relevant course attributes for further processing. 
Next, Feature Engineering is applied, where course titles and descriptions are combined into a unified text field. 
Natural Language Processing (NLP) techniques, such as tokenization using NLTK and removal of stop words, are used to extract meaningful features. 
A vocabulary is created using gensim, and Bag of Words representations are generated for each course, which are then used to compute course similarity scores.

The content-based recommendation system includes a User Profile Model that predicts how a user might rate new courses based on their preferences and a Course Similarity Model that recommends courses similar to what the user has already liked. 
User profiles are further analyzed using PCA for dimensionality reduction and K-Means clustering to recommend popular courses within specific user clusters. 

In addition, a Collaborative Filtering approach is implemented, converting user-item ratings into sparse matrices and applying K-Nearest Neighbors (k-NN) to predict course preferences based on similar users and items. 

Streamlit provides a user-friendly interface where learners can interact with the system, explore recommended courses, and discover new learning opportunities. 
This project showcases the integration of AI, NLP, and recommendation algorithms to create a personalized and intelligent educational tool that adapts to user interests and helps learners make informed course choices.
`,

    repo: "https://github.com/Vishwavijeth/Course-Recommender",
  },
  {
    id: 4,
    title: "PhotoQuest",
    date: "October 6, 2024",
    slug: "photo_quest",
    tags: ["Kotlin", "UI", "Unsplash API"],
    content: `
PhotoQuest is a Kotlin-based mobile application built with Firebase that provides a seamless image discovery and management experience, inspired by popular platforms like Pinterest. 
The app leverages the Unsplash API to fetch high-quality images and allows users to explore a vast collection of visuals tailored to their interests. 

Users can sign in to access personalized features. 
On the home screen, a dynamic gallery displays all the available images with smooth scrolling and responsive UI. 
Each image can be added to the favorites section for quick access later or downloaded directly to the device for offline use. 

Clicking on an image opens a detailed view, where users can see the image description, the photographer’s name, and other relevant metadata, providing context and credit to the content creator. 
The app also includes a powerful search functionality, enabling users to look for images based on keywords and interests. 
Search results can be similarly favorited or downloaded, ensuring an organized and interactive experience. 

The favorites section allows users to easily revisit all the images they have saved, providing a personalized library of content. 
PhotoQuest combines Kotlin, Firebase authentication, and real-time API integration to create an intuitive, visually appealing, and highly functional image discovery app that keeps users engaged and inspired.
`,

    repo: "https://github.com/vishwavijeth/photoquest",
  },
  {
    id: 5,
    title: "Expense Tracker",
    date: "October 6, 2024",
    slug: "expense_tracker",
    tags: ["Python", "FastAPI", "PostgreSQL", "Backend"],
    content: `
Expense Tracker is a Python backend application built with FastAPI and PostgreSQL, designed to help users efficiently track, manage, and share their daily expenses. 
The application allows users to create accounts, securely log in, and record their expenses with detailed descriptions, amounts, and split methods. 
It provides a RESTful API for seamless integration with frontend applications and ensures robust data validation at every step. 

Users can add expenses and specify how they are split among participants, supporting multiple split types such as equal, exact amounts, or percentages. 
The system enforces strict validation rules to prevent errors: for example, the total percentage of all participants must equal 100%, and the sum of distributed amounts must match the total expense. 
Clear error responses guide users if these constraints are violated, ensuring data integrity and reliability. 

The application’s backend models are designed for clarity and scalability. 
The User model includes fields such as username, email, phone, and hashed password, along with a relationship to their expenses. 
The Expense model captures essential details like description, amount, split method, and split details, linking each expense to its owner. 
Additional validation ensures emails are properly formatted, and phone numbers are exactly 10 digits. 

Overall, Expense Tracker provides a secure, organized, and user-friendly platform for individuals and groups to manage their finances efficiently. 
With FastAPI’s high performance and PostgreSQL’s reliability, the system can handle multiple users and expenses, making daily expense tracking and sharing simple and accurate.
`,

    repo: "https://github.com/vishwavijeth/expense-tracker",
  },
  {
    id: 6,
    title: "Text Summarizer",
    date: "July 23, 2024",
    slug: "text_summarizer",
    tags: ["Python", "NLP", "Hugging Face"],
    content: `
Text Summarizer is an AI-powered application designed to transform lengthy text documents into concise and meaningful summaries while preserving the core information. 
The project leverages the Hugging Face Transformers library, utilizing the Pegasus model fine-tuned on the Samsum dataset to deliver high-quality abstractive summaries. 

The Pegasus model is particularly suited for generating coherent summaries that go beyond simple extraction, creating new sentences that capture the essence of the original text. 
By fine-tuning with the Samsum dataset, which contains dialogue and conversational data, the system excels at summarizing dialogue-heavy content, making it ideal for applications such as chat logs, meeting notes, or customer support transcripts. 

The project workflow includes thorough data preprocessing, model training, and evaluation to ensure accuracy and relevance in the generated summaries. 
Text inputs are cleaned and formatted, tokenized for model processing, and fed into the Pegasus model, which generates succinct summaries while retaining key points. 
FastAPI backend integration allows easy API access, enabling developers to incorporate summarization functionality into other applications or services. 

Overall, this project showcases the power of modern NLP techniques in creating intelligent, automated solutions for information distillation, saving users time and effort while providing clear and coherent summaries from lengthy or complex text sources.
`,

    repo: "https://github.com/vishwavijeth/text-summarizer",
  },
  {
    id: 7,
    title: "Todo Backend",
    date: "July 23, 2024",
    slug: "todo_backend",
    tags: ["Python", "FastAPI", "PostgreSQL", "Backend"],
    content: `
Todo Backend is a Python backend application built with FastAPI and PostgreSQL, designed to provide a robust and scalable task management system. 
The project serves as the backend for a full-featured Todo application, supporting all CRUD (Create, Read, Update, Delete) operations for tasks while maintaining secure user authentication and role-based access control. 

Each user can create multiple tasks, update their status, and delete them when completed. 
The system ensures that each task is associated with the correct user, providing personalized task management and preventing unauthorized access. 
Role-based access control allows for more advanced scenarios where different users or user types may have varying permissions, ensuring flexibility and security in multi-user environments. 

The backend is optimized for performance and scalability, using efficient database queries and asynchronous handling to manage multiple requests concurrently. 
Data models are carefully structured to maintain relationships between users and tasks, and Pydantic schemas are used for request validation to ensure data integrity. 

Overall, Todo Backend demonstrates a clean and efficient backend architecture for task management applications. 
It provides a reliable foundation for building interactive frontends or mobile applications, allowing users to manage their daily tasks seamlessly while ensuring security, scalability, and high performance.
`,

    repo: "https://github.com/vishwavijeth/todo-backend",
  },
  {
    id: 8,
    title: "SmartVision",
    date: "December 7, 2023",
    slug: "smart_vision",
    tags: [
      "Kotlin",
      "UI",
      "TensorFlow",
      "ML",
      "Video Analytics",
      "Computer Vision",
    ],
    content: `
SmartVision is an Android application developed using Kotlin and TensorFlow Lite, designed to demonstrate advanced video analytics capabilities in real time. 
The app integrates multiple computer vision algorithms, providing a comprehensive proof-of-concept for tasks such as image classification, object detection, image segmentation, OCR (Optical Character Recognition), and human pose estimation. 

SmartVision allows users to feed live video input through the device camera or pre-recorded videos, and the integrated TensorFlow Lite models process the frames on-device to deliver fast and accurate predictions. 
Object detection identifies and labels various objects in the scene, while image segmentation highlights regions of interest by classifying pixels into meaningful categories. 
OCR functionality extracts text from images and video frames, enabling real-time text recognition for applications like document scanning or scene understanding. 
Pose estimation analyzes human body landmarks, tracking movements and positions with precision, which can be applied in fitness, sports, or interactive applications. 

The application is optimized for performance, achieving around 30 frames per second on mid-range devices, ensuring smooth real-time inference without significant lag. 
SmartVision combines the power of Kotlin for Android development and TensorFlow Lite for lightweight, efficient AI inference, making it a versatile platform for demonstrating modern video analytics techniques. 

Overall, SmartVision showcases how advanced machine learning models can be deployed on mobile devices, enabling real-time computer vision applications and opening up possibilities for interactive and intelligent Android apps.
`,

    repo: "https://github.com/Vishwavijeth/SmartVision",
  },
];
