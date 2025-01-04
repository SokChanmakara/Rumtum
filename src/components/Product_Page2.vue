<template>
    <div class="reviews">
      <!-- Tab Navigation -->
      <div class="tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          :class="['tab', { active: activeTab === tab }]"
          @click="setActiveTab(tab)"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Reviews Content -->
      <div v-if="activeTab === 'Reviews'" class="content">
        <div class="stats">
          <div class="rating">
            <h3>Customer Reviews</h3>
            <div class="stars">
              <span>4.8</span>
              <div class="star-icons">
                ★★★★★
              </div>
              <span>(127 reviews)</span>
            </div>
          </div>
          <button class="write">Write a Review</button>
        </div>
  
        <!-- Individual Reviews -->
        <div class="review-list">
          <div v-for="review in reviews" :key="review.id" class="review">
            <div class="user">
              <img :src="review.userImage" alt="User" class="avatar" />
              <div class="info">
                <h4>{{ review.name }}</h4>
                <p class="meta">
                  {{ review.date }} | {{ review.color }} | Size {{ review.size }}
                </p>
              </div>
            </div>
  
            <div class="rating">
              <div class="stars">★★★★★</div>
              <p class="verified">Verified Purchase</p>
            </div>
  
            <p class="text">{{ review.comment }}</p>
  
            <div class="photos">
              <img 
                v-for="(photo, index) in review.photos" 
                :key="index"
                :src="photo"
                alt="Review photo"
                @click="openLightbox(review.photos, index)"
              />
            </div>
  
            <div class="actions">
              <div class="votes">
                <button 
                  :class="['vote', { active: review.userVote === 'up' }]"
                  @click="handleVote(review.id, 'up')"
                >
                  👍 {{ review.upvotes }}
                </button>
                <button 
                  :class="['vote', { active: review.userVote === 'down' }]"
                  @click="handleVote(review.id, 'down')"
                >
                  👎 {{ review.downvotes }}
                </button>
              </div>
              <button class="comment" @click="toggleComments(review.id)">
                💬 {{ review.comments.length }} Reply
              </button>
            </div>
  
            <!-- Comments Section -->
            <div v-if="review.showComments" class="comments">
              <div v-for="comment in review.comments" :key="comment.id" class="comment">
                <div class="user">
                  <img :src="comment.userImage" alt="User" class="avatar-small" />
                  <div class="info">
                    <h5>{{ comment.name }}</h5>
                    <p class="text">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
              <div class="add-comment">
                <input 
                  type="text" 
                  v-model="newComment[review.id]" 
                  placeholder="Add a comment..."
                />
                <button @click="addComment(review.id)">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="complete">
        <h3>Complete The Look</h3>
        <div class="products">
          <div v-for="product in relatedProducts" :key="product.id" class="product">
            <img :src="product.image" :alt="product.name" />
            <h4>{{ product.name }}</h4>
            <p class="price">${{ product.price.toFixed(2) }}</p>
            <button class="add">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeTab = ref('Reviews')
  const newComment = ref({})
  
  const tabs = ['Product Details', 'Reviews']
  
  const reviews = ref([
    {
      id: 1,
      name: 'Zaynee',
      userImage: '../src/assets/C4.png',
      date: 'December 15, 2023',
      color: 'Green',
      size: 'M',
      comment: 'Love this knit top! The material is so soft and comfortable. Perfect for casual wear.',
      photos: [
        '../src/assets/Green2.png',
        '../src/assets/Green3.png',
        '../src/assets/Green4.png'
      ],
      upvotes: 24,
      downvotes: 1,
      userVote: null,
      comments: [
        {
          id: 1,
          name: 'mezu',
          userImage: '../src/assets/C4.png',
          text: 'Thanks for sharing! How is the sizing?'
        },
        {
          id: 2,
          name: 'sushii',
          userImage: '../src/assets/Black.png',
          text: 'I love it, but is it fittable for summer?'
        }
      ],
      showComments: false
    },
  ])
  
  const relatedProducts = ref([
    {
      id: 1,
      name: 'Bella Cardigan',
      image:'../src/assets/C4.png',
      price: 280.00
    },
    {
      id: 2,
      name: 'Luna Sweater',
      image:'../src/assets/C3.png',
      price: 260.00
    },
    {
      id: 3,
      name: 'Stella Turtleneck',
      image:'../src/assets/C1.png',
      price: 290.00
    },
    {
      id: 4,
      name: 'vruh Turtleneck',
      image:'../src/assets/C2.png',
      price: 290.00
    }
  ])
  
  const setActiveTab = (tab) => {
    activeTab.value = tab
  }
  
  const handleVote = (reviewId, voteType) => {
    const review = reviews.value.find(r => r.id === reviewId)
    if (review.userVote === voteType) {
      review.userVote = null
      if (voteType === 'up') review.upvotes--
      else review.downvotes--
    } else {
      if (review.userVote) {
        if (review.userVote === 'up') review.upvotes--
        else review.downvotes--
      }
      review.userVote = voteType
      if (voteType === 'up') review.upvotes++
      else review.downvotes++
    }
  }
  
  const toggleComments = (reviewId) => {
    const review = reviews.value.find(r => r.id === reviewId)
    review.showComments = !review.showComments
  }
  
  const addComment = (reviewId) => {
    if (!newComment.value[reviewId]?.trim()) return
  
    const review = reviews.value.find(r => r.id === reviewId)
    review.comments.push({
      id: Date.now(),
      name: 'You',
      userImage: '../src/assets/C1.png',
      text: newComment.value[reviewId]
    })
    newComment.value[reviewId] = ''
  }
  
  const openLightbox = (photos, index) => {
    console.log('Opening lightbox:', photos[index])
  }
  </script>
  
  <style scoped>
  .reviews {
    max-width: 1300px;
    margin: 40px auto;
    padding: 0 20px;
  }
  .tabs {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .tab {
    padding: 15px 30px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    color: #666;
  } 
  .tab.active {
    color: #000;
    border-bottom: 2px solid #000;
  } 
  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }  
  .rating {
    display: flex;
    flex-direction: column;
    gap: 10px;
  } 
  .stars {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffd700;
  } 
  .write {
    padding: 10px 20px;
    background: #000;
    color: white;
    border: none;
    cursor: pointer;
  } 
  .review {
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  } 
  .user {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }  
  .avatar-small {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }  
  .meta {
    color: #666;
    font-size: 14px;
  } 
  .photos {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  } 
  .photos img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }  
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  } 
  .votes {
    display: flex;
    gap: 10px;
  }  
  .vote {
    padding: 5px 10px;
    background: none;
    border: 1px solid #ddd;
    cursor: pointer;
  }  
  .vote.active {
    background: #f5f5f5;
  }  
  .comments {
    margin-top: 15px;
    padding-left: 65px;
  }  
  .comment {
    margin-bottom: 15px;
  }  
  .add-comment {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }  
  .add-comment input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
  } 
  .add-comment button {
    padding: 8px 15px;
    background: #000;
    color: white;
    border: none;
    cursor: pointer;
  } 
  .complete {
    margin-top: 40px;
  }  
  .complete h3 {
    margin-bottom: 20px;
  }  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  } 
  .product {
    text-align: center;
  } 
  .product img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .price {
    color: #666;
    margin: 5px 0;
  } 
  .add {
    width: 100%;
    padding: 10px;
    margin-bottom: 70px;
    background: #000;
    color: white;
    border: none;
    cursor: pointer;   
  }
  @media (max-width: 768px) {
    .tabs {
      overflow-x: auto;
      white-space: nowrap;
    }    
    .tab {
      padding: 15px 20px;
    }    
    .stats {
      flex-direction: column;
      gap: 15px;
    }    
    .photos img {
      width: 80px;
      height: 80px;
    }    
    .comments {
      padding-left: 20px;
    }    
    .products {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  } 
  @media (max-width: 480px) {
    .actions {
      flex-direction: column;
      gap: 10px;
    }
    .photos {
      overflow-x: auto;
      padding-bottom: 10px;
    }
    .product img {
      height: 250px;
    }
  }
  </style>