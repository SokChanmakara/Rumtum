<template>
<div class="container">
    <div class="search-box">
        <h2>What are you looking for?</h2>
        <div class="search-input-container">
            <input type="text" class="search-input" placeholder="Search for products, brands, shops and more" />
            <span class="search-icon">
                <i class="pi pi-search" style="color: black"></i>
            </span>
        </div>
        <div class="tags">
            <div class="tag">Jeans</div>
            <div class="tag">Dresses</div>
            <div class="tag">Summer</div>
            <div class="tag">Tops</div>
        </div>
    </div>

    <div class="products">
        <h3>Popular Products</h3>
        <div class="product-grid">
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Cropped Ribbed T-Shirt" />
            <div class="details">
                <h4>CROPPED RIBBED T-SHIRT</h4>
                <p>$29</p>
            </div>
            </div>
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Martha Knit Top" />
            <div class="details">
                <h4>MARTHA KNIT TOP</h4>
                <p>$120</p>
            </div>
            </div>
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Buckle Skinny Buckle" />
            <div class="details">
                <h4>BUCKLE SKINNY BUCKLE</h4>
                <p>$39</p>
            </div>
            </div>
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Emotion Mini Top" />
            <div class="details">
                <h4>EMOTION MINI TOP</h4>
                <p>$150</p>
            </div>
            </div>
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Top Slip on Velcro" />
            <div class="details">
                <h4>TOP SLIP ON VELCRO</h4>
                <p>$129</p>
            </div>
            </div>
            <div class="product-card">
            <img src="https://placehold.co/400x500" alt="Backpack with Contrast" />
            <div class="details">
                <h4>BACKPACK WITH CONTRAST</h4>
                <p>$79</p>
            </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

    body {
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        color: #333;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .container {
        width: 100%;
        margin: auto;
        padding: 16px;
        flex: 1;
    }

    .search-box {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

    .search-box h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .search-input-container {
        position: relative;
    }

    .search-input {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 25px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s;
    }

    .search-input:focus {
        border-color: #007bff;
    }

    .search-clear {
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #999;
    }

    .search-icon {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        font-size: 18px;
        color: #999;
    }

    .tags {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }

    .tag {
        padding: 6px 12px;
        background: #f1f3f5;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s;
    }

    .tag:hover {
        background: #e0e0e0;
    }

    .products {
        margin-top: 20px;
    }

    .products h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }

    .product-card {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    .product-card img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .product-card .details {
        padding: 10px;
    }

    .product-card h4 {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .product-card p {
        font-size: 14px;
        color: #777;
    }

    .footer {
        text-align: center;
        padding: 10px 0;
        background: #e9ecef;
    }
</style>