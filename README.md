## 【專案簡介】
這是一個以手工香氛商品為主的電商網站，顧客能在前台網站中瀏覽產品，並將商品加入購物車或願望清單、填寫訂單資料並送出訂單；而管理者可在後台新增、編輯和刪除商品與優惠券，和查看訂單列表，確認訂單進度。
<img src="https://res.cloudinary.com/da85u8p5e/image/upload/v1769160861/perfectu_aufajl.png">

## 【Live Demo】
- 前台：https://yellowchen.github.io/perfectu/
- 後台(管理者)：https://yellowchen.github.io/perfectu/#/login
- 管理者帳號：yellowchen1103@gmail.com
- 管理者密碼：yc1793

## 【功能介紹】
【後台(管理者)】
- 需登入有效之帳號密碼，才可操作使用
- 使用者登入後，在 token 有效且尚未登出前，不需重複登入
- 使用者可操作管理商品、優惠券、訂單

【前台】
- 使用者可從網站瀏覽商品，檢視特定類別商品
- 使用者可將商品加入購物車，調整數量，或是刪除項目
- 使用者可將猶豫的商品加入願望清單，能刪除項目或加入購物車
- 使用者可在購物車中，套用不同的優惠碼，獲得不同程度的折扣
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
