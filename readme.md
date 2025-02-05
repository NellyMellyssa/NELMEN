Nextjs-app E-commerce web Applications

Build a full-functional e-commerce website , just like Amazon, complete with an admin dashboard.
I’ll use Next.js, MongoDB, and free AI tools to make it happen.

> > > > In Nextjs App Backend is by server actions.

Steps to follow:

1. create next app called <nextjs-app>

   1. First of All create Nextjs App:
      <npx create-next-app@latest nextjs-app>
      <cd nextjs-app>
      <npm run dev> This is how to run the project

   2. Based on docs at <https://ui.shadcn.com/docs/installation/next
      > run these commmands on terminal:
      > <npx shadcn@latest init>
      > <npx shadcn@latest add button>

copy yellow theme from <https://ui.shadcn.com/themes

> paste it in global.css
> Then replace content in main element in page.tsx to check result on browser

2.  create website layout

1.  Create .env.local

NEXT_PUBLIC_APP_NAME=NxtAmzn
NEXT_PUBLIC_APP_SLOGAN=Spend less, enjoy more.
NEXT_PUBLIC_APP_DESCRIPTION=An Amazon clone built with Next.js and MongoDB

2. lib/constants.ts
3. create logo.svg and save in /public/icons folder
4. Update app/globals.css
5. components/shared/header/menu.tsx
6. run on terminal: <npx shadcn@latest add select input>
7. components/shared/header/search.tsx
8. lib/data.ts
9. components/shared/header/index.tsx
10. components/shared/footer.tsx
11. app/(home)/layout.tsx
12. app/(home)/page.tsx
13. app/layout.ts

14. create home page carousel

    1. save banner1.jpg, banner2.jpg and banner3.jpg in /public/images folder
    2. Update data.js
    3. Run it on terminal: npx shadcn@latest add carousel
    4. npm i embla-carousel-autoplay
    5. components/shared/home/home-carousel.tsx
    6. app/(home)/page.tsx

15. connect to mongodb and seed products

    1. create mongodb database on mongodb.com
    2. get mongodb connection string and put it in .env.local as MONGODB_URI
    3. npm i mongoose
    4. lib/db/index.ts
    5. lib/utils.ts
    6. npm i zod
    7. lib/validator.ts
    8. types/index.ts
    9. lib/db/models/product.model.ts
    10. types/index.ts
    11. lib/data.ts
    12. add images from p11-1.jpg to p46-2.jpg and categories images to public/images folder
    13. lib/db/seed.ts
    14. Update package.json
    15. npm run seed
    16. open mongodb compass and check results
        Then After you should see on the browser home page (like frontend)
        Try to make it Wonderful by adding home cards to user

16. create home cards

17. npx shadcn@latest add card
18. components/shared/home/home-card.tsx
19. lib/actions/product.actions.ts
20. app/(home)/page.tsx

21. create todays deals slider

22. Update global.css
23. update it lib/actions/product.actions.ts
24. lib/utils.ts
25. components/shared/product/rating.tsx
26. components/shared/product/product-price.tsx
27. components/shared/product/image-hover.tsx
28. components/shared/product/product-card.tsx
29. components/shared/product/product-slider.tsx
30. update app/(home)/page.tsx

31. create best selling slider
    1. update app/(home)/page.tsx
32. create product details page

    1. npm i react-medium-image-zoom
    2. npx shadcn@latest add separator
    3. update lib/constants.ts
    4. update lib/actions/product.actions.ts
    5. components/shared/product/product-gallery.tsx
    6. components/shared/product/select-variant.tsx
    7. app/(root)/product/[slug]/page.tsx
    8. app/(root)/layout.tsx

33. create browsing history

    1. npm i zustand
    2. hooks/use-browsing-history.ts
       3.components/shared/browsing-history-list.tsx
    3. app/api/products/browsing-history/route.ts
    4. Update app/(home)/page.tsx
    5. Update app/(root)/product/[slug]/page.tsx
    6. components/shared/product/add-to-browsing-history.tsx

34. implement add to cart

    1. npx shadcn@latest add toast
    2. Update lib/utils.ts
    3. Update lib/constants.ts
    4. lib/validator.ts
    5. types/index.ts
    6. lib/actions/order.actions.ts
    7. hooks/use-cart-store.ts
    8. components/shared/product/add-to-cart.tsx
    9. hooks/use-is-mounted.ts
    10. app/(root)/product/[slug]/page.tsx
    11. app/(root)/cart/[itemId]/cart-add-item.tsx
    12. app/(root)/cart/[itemId]/page.tsx
    13. components/shared/header/cart-button.tsx
    14. components/shared/header/menu.tsx
    15. components/shared/product/product-card.tsx

35. create cart page
36. hooks/use-cart-store.ts
37. app/(root)/cart/page.tsx

38. create cart sidebar

39. Install packages : npx shadcn@latest add scroll-area
40. update lib/utils.ts
41. create components/shared/cart-sidebar.tsx
42. create hooks/use-device-type.ts
43. create hooks/use-cart-sidebar.ts
44. update components/shared/header/cart-button.tsx
45. create components/shared/client-providers.tsx
46. update app/layout.tsx

47. signin user

48. Install Packages:
49. npx shadcn@latest add form dropdown-menu
50. npm i next-auth@beta bcryptjs react-hook-form b@hookform/ resolvers mongodb @auth/mongodb-adapter
51. npm i --save-dev @types/bcryptjs
52. update .env.local
    NextAuth (generate secret: $ npx auth secret)
    AUTH_SECRET=v7a59n6HN3COWeporDl4lxfKkL7UPkvVHOu0FDUetjA=
53. update lib/validator.ts
54. update types/index.ts
55. create lib/db/models/user.model.ts
56. create lib/db/client.ts
57. create auth.config.ts
58. create auth.ts
59. middleware.ts
60. create app/api/auth/[...nextauth]/route.ts
61. create app/checkout/page.tsx
62. create components/shared/separator-or.tsx
63. create lib/actions/user.actions.ts
64. update app/globals.css
65. create app/(auth)/sign-in/credentials-signin-form.tsx
66. create app/(auth)/sign-in/page.tsx
67. create components/shared/header/user-button.tsx
68. update components/shared/header/menu.tsx
69. update lib/constants.ts
70. create app/(auth)/layout.tsx
71. update lib/data.ts
72. update lib/db/seed.ts
73. npm run seed
74. npm run build to check if the project run perfect

75. Register User

    1. update lib/utils.ts
    2. update lib/validator.ts
    3. update types/index.ts
    4. update lib/actions/user.actions.ts
    5. create app/(auth)/sign-up/signup-form.tsx
    6. create app/(auth)/sign-up/page.tsx

76. Signin with Google

    1. open https://console.cloud.google.com/apis/credentials
    2. create a new OAuth 2.0 Client ID ans get its credentials
    3. Update .env.local with:
       AUTH_GOOGLE_ID=
       AUTH_GOOGLE_SECRET=
    4. update auth.ts
    5. update lib/actions/user.actions.ts
    6. create app/(auth)/sign-in/google-signin-form.tsx
    7. update app/(auth)/sign-in/page.tsx

77. create Checkout page (17) I am here so far

78. Install packages
    npx shadcn@latest add radio-group

79. update lib/constants.ts

80. placer order

81. pay Order By paypal_confused
82. pay Order By Stripe_confused
83. Rate Review Products
84. Create Order History page
85. Update user name
86. create category sidebar
87. create search Page
88. Add Theme color
89. Create Admin Dashboard
