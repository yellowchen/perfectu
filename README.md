## 【專案簡介】
這是一個以手工香氛商品為主的電商網站，顧客能在前台網站中瀏覽產品，並將商品加入購物車或願望清單、填寫訂單資料並送出訂單；而管理者可在後台新增、編輯和刪除商品與優惠券，和查看訂單列表，確認訂單進度。
<img src="https://res.cloudinary.com/da85u8p5e/image/upload/v1769160861/perfectu_aufajl.png">

## [【Live Demo】]
- 前台：https://yellowchen.github.io/perfectu/
- 後台(管理者)：http://localhost:3000/perfectu#/login
- 管理者帳號：yellowchen1103@gmail.com
- 管理者密碼：yc1793

## 【功能介紹】
【後台(管理者)】
- 需登入有效之帳號密碼，才可操作使用
- 使用者登入後，在 token 有效且尚未登出前，不需重複登入
- 使用者可操作管理商品、優惠券、訂單

【前台】
- 顯示商品列表
- 依類別篩選商品
- 商品加入購物車
- 顯示購物車列表
- 商品加入願望清單
- 顯示願望清單列表
- 編輯購物車商品數量、刪除購物車
- 購物車使用優惠券
- 填寫顧客資訊，表單驗證與送出
- RWD響應式網站，支援多種尺寸介面瀏覽


## 【使用技術】
- 使用 Create React App 建立專案環境
- 使用 React Functional components & hooks 進行開發
- 使用 useReducer & useContext 進行狀態管理
- 使用 React Hook Form 開發表單，實現表單監聽、驗證等功能
- 使用 Sass、Bootstrap 5 進行 RWD 響應式網頁排版
- 使用 Github Actions 將更新內容自動部署至 GitHub Pages



## 【專案安裝】
```
$ git clone https://github.com/yellowchen/perfectu
$ cd Work-06
$ npm install
$ npm start
```

## 【相關資源】
- 圖片來源：[Unsplash](https://unsplash.com/)
- Icon：Bootstrap Icons(https://icons.getbootstrap.com/)
- 字形：Google Fonts(https://fonts.google.com/)
