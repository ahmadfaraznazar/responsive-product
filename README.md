# Project Name: Responsive Product Page

## Project Description
This project is a responsive product lisiting application that allows users to filter products based on category and price range. It features a user-friendly interface where products are displayed with relevant details such as name, category, price, and description. The products are dynamically rendered using JavaScript.

## Tools Used
- **Visual Studio Code** (for coding)
- **Ideogram** (for banner image)
- **Tailwind CSS** (CDN for styling: due to shortage of time) 

## Approach
I implemented three filters on six products, ensuring that there are two products for each category and two for each price range. The products are dynamically added to the HTML using JavaScript, with product listings sourced from the Amazon site.

### Challenges Encountered
1. **Syncing Filters**: I faced difficulties in syncing all the filters; when I implemented one, the others seemed to go astray. To overcome this challenge, I sought help from Stack Overflow and GPT, which provided insights on how to manage multiple filters effectively.

2. **Position of Add to Cart Button**: Due to the differences in the size of the product descriptions, the "Add to Cart" button kept changing its position for each product. I resolved this issue by using a flexible layout with CSS. I ensured that the product cards utilized flexbox properties to maintain consistent spacing and positioning for the button, regardless of the description length.

