<Nextjs-app E-commerce web Applications>

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

2.  lib/constants.ts
3.  create logo.svg and save in /public/icons folder
4.  Update app/globals.css
5.  components/shared/header/menu.tsx
6.  run on terminal: <npx shadcn@latest add select input>
7.  components/shared/header/search.tsx
8.  lib/data.ts
9.  components/shared/header/index.tsx
10. components/shared/footer.tsx
11. app/(home)/layout.tsx
12. app/(home)/page.tsx
13. app/layout.ts

    3.  create home page carousel

        1. save banner1.jpg, banner2.jpg and banner3.jpg in /public/images folder
        2. Update data.js
        3. Run it on terminal: npx shadcn@latest add carousel
        4. npm i embla-carousel-autoplay
        5. components/shared/home/home-carousel.tsx
        6. app/(home)/page.tsx

    4.  connect to mongodb and seed products

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

    5.  create home cards

        1. npx shadcn@latest add card
        2. components/shared/home/home-card.tsx
        3. lib/actions/product.actions.ts
        4. app/(home)/page.tsx

    6.  create todays deals slider

        1. Update global.css
        2. update it lib/actions/product.actions.ts
        3. lib/utils.ts
        4. components/shared/product/rating.tsx
        5. components/shared/product/product-price.tsx
        6. components/shared/product/image-hover.tsx
        7. components/shared/product/product-card.tsx
        8. components/shared/product/product-slider.tsx
        9. update app/(home)/page.tsx

    7.  create best selling slider

        1. update app/(home)/page.tsx

    8.  create product details page

        1. npm i react-medium-image-zoom
        2. npx shadcn@latest add separator
        3. update lib/constants.ts
        4. update lib/actions/product.actions.ts
        5. components/shared/product/product-gallery.tsx
        6. components/shared/product/select-variant.tsx
        7. app/(root)/product/[slug]/page.tsx
        8. app/(root)/layout.tsx

    9.  create browsing history

        1. npm i zustand
        2. hooks/use-browsing-history.ts
        3. components/shared/browsing-history-list.tsx
        4. app/api/products/browsing-history/route.ts
        5. Update app/(home)/page.tsx
        6. Update app/(root)/product/[slug]/page.tsx
        7. components/shared/product/add-to-browsing-history.tsx

    10. implement add to cart

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

    11. create cart page

        1. hooks/use-cart-store.ts
        2. app/(root)/cart/page.tsx

    12. create cart sidebar

        1. Install packages : npx shadcn@latest add scroll-area
        2. update lib/utils.ts
        3. create components/shared/cart-sidebar.tsx
        4. create hooks/use-device-type.ts
        5. create hooks/use-cart-sidebar.ts
        6. update components/shared/header/cart-button.tsx
        7. create components/shared/client-providers.tsx
        8. update app/layout.tsx

    13. signin user

        1.  Install Packages:
            npx shadcn@latest add form dropdown-menu
            npm i next-auth@beta bcryptjs react-hook-form b@hookform/ resolvers mongodb @auth/mongodb-adapter
            npm i --save-dev @types/bcryptjs
        2.  update .env.local

        NextAuth (generate secret: $ npx auth secret)
        AUTH_SECRET=v7a59n6HN3COWeporDl4lxfKkL7UPkvVHOu0FDUetjA=

        3.  update lib/validator.ts

        4.  update types/index.ts
        5.  create lib/db/models/user.model.ts
        6.  create lib/db/client.ts
        7.  create auth.config.ts
        8.  create auth.ts
        9.  middleware.ts
        10. create app/api/auth/[...nextauth]/route.ts
        11. create app/checkout/page.tsx
        12. create components/shared/separator-or.tsx
        13. create lib/actions/user.actions.ts
        14. update app/globals.css
        15. create app/(auth)/sign-in/credentials-signin-form.tsx
        16. create app/(auth)/sign-in/page.tsx
        17. create components/shared/header/user-button.tsx
        18. update components/shared/header/menu.tsx
        19. update lib/constants.ts
        20. create app/(auth)/layout.tsx
        21. update lib/data.ts
        22. update lib/db/seed.ts
        23. npm run seed
        24. npm run build to check if the project run perfect

    14. Register User

        1. update lib/utils.ts
        2. update lib/validator.ts
        3. update types/index.ts
        4. update lib/actions/user.actions.ts
        5. create app/(auth)/sign-up/signup-form.tsx
        6. create app/(auth)/sign-up/page.tsx

    15. Signin with Google

        1. open https://console.cloud.google.com/apis/credentials
        2. create a new OAuth 2.0 Client ID ans get its credentials
        3. Update .env.local with:
           AUTH_GOOGLE_ID=
           AUTH_GOOGLE_SECRET=
        4. update auth.ts
        5. update lib/actions/user.actions.ts
        6. create app/(auth)/sign-in/google-signin-form.tsx
        7. update app/(auth)/sign-in/page.tsx

    16. create Checkout page

        Install packages

        1.  npx shadcn@latest add radio-group
        2.  update lib/constants.
        3.  update lib/utils.ts
        4.  update lib/validator.ts
        5.  update types/index.ts
        6.  create app/checkout/checkout-footer.tsx
        7.  update hooks/use-cart-store.ts
        8.  create app/checkout/checkout-form.tsx
        9.  create app/checkout/layout.tsx
        10. update app/checkout/page.tsx
        11. update lib/actions/order.actions.ts

    17. placer order (wait to do it for now)
    18. pay Order By paypal(wait to do it by now)
    19. pay Order By Stripe(wait to do it by now_18 to 20)

    20. Rate Review Products

        1.  Install packages
            npx shadcn@latest add dialog textarea progress popover
            npm i react-intersection-observer --legacy-peer-deps
        2.  update lib/validator.ts
        3.  update types/index.ts
        4.  create lib/db/models/review.model.ts
        5.  create lib/actions/review.actions.ts
        6.  update lib/data.ts
        7.  update lib/db/seed.ts
        8.  npm run seed
        9.  update app/globals.css
        10. create components/shared/product/rating-summary.tsx
        11. create app/(root)/product/[slug]/review-list.tsx
        12. update app/(root)/product/[slug]/page.tsx

    21. Create Order History page (wait to do it for now as placer order not yet done)
    22. Update user name

        1. update lib/validator.ts
        2. update types/index.ts
        3. update lib/actions/user.actions.ts
        4. create app/(root)/account/manage/page.tsx
        5. create app/(root)/account/manage/name/profile-form.tsx
        6. create app/(root)/account/manage/name/page.tsx
           create app/(root)/account/page.tsx

    23. create category sidebar
        1.  install packages
            npx shadcn@latest add drawer
        2.  update app/globals.css
        3.  create components/shared/header/sidebar.tsx
        4.  update components/shared/header/index.tsx
    24. create search Page

        1. update lib/utils.ts
        2. update components/shared/header/search.tsx
        3. install packages:
           npx shadcn@latest add collapsible
        4. create components/shared/collapsible-on-mobile.tsx
        5. create components/shared/product/product-sort-selector.tsx
        6. update lib/actions/product.actions.ts
        7. create app/(root)/search/page.tsx

    25. Add Theme color
        1. app/loading.tsx
        2. app/error.tsx
        3. app/not-found.tsx
        4. install packages to add theme color:
           npx shadcn@latest add sheet
           npm i next-themes --legacy-peer-deps
        5. update app/layout.tsx
        6. create hooks/use-color-store.ts
        7. create components/shared/color-provider.tsx
        8. create components/shared/theme-provider.tsx
        9. update components/shared/client-providers.tsx
        10. create components/shared/header/theme-switcher.tsx
        11. update components/shared/header/menu.tsx
    26. Create Admin Dashboard
        1.  install packages:
            npx shadcn@latest add skeleton calendar
            npm i recharts --legacy-peer-deps
        2.  update types/index.ts
        3.  update lib/actions/order.actions.ts (wait to do it for now)
        4.  create app/admin/admin-nav.ts
        5.  update components/shared/header/menu.tsx
        6.  create app/admin/layout.tsx
        7.  create app/admin/overview/table-chart.tsx
        8.  create app/admin/overview/data-range-picker.tsx
        9.  create app/admin/overview/sales-area-chart.tsx
        10. create app/admin/overview/sales-category-pie-chart.tsx
        11. create app/admin/overview/overview-report.tsx
        12. create/app/admin/overview/page.tsx
