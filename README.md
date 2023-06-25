# POS Project !

The POS Project is a web application designed to serve as a Point-of-Sale system for supermarkets. It provides features for managing products and carts, allowing users to handle multiple carts and calculate the total amount for each order. Users can add descriptions to the carts for additional details.

# Installation

To run the POS Project, ensure that you have the following prerequisites:
Node.js
NPM
Follow these steps to install and set up the project:

1.  Clone the repository: git clone https://github.com/shebli91/point-of-sale
2.  Navigate to the project directory: cd pos-project
3.  Install dependencies: npm install
4.  Start the application server : `npm run server`
5.  Start the application : `npm start`
    Open your browser and visit http://localhost:8000/{page} to access the Server pages.
    Open your browser and visit http://localhost:3000 to access the POS system.

# Pages : -

## Login Page

The Login page serves as the landing page for the POS system. Users are required to log in to gain access to the system. The login credentials are as follows:

Username: test1
Password: test1

Upon successful login, users are granted access to the main functionality of the system.

## Products Page

The Products page displays a list of all products in the system. Users can perform the following actions:

- View product details, including the product name, code, category, image, price, and unit of measure.
- Add a new product by providing the required information.
- Update an existing product's details.
- Delete a product from the system.
- Search by the product name and filter the list of products by category.

## Categories Page

The Categories page lists all product categories in the system. Users can perform the following actions:

- View all product categories and their respective names.
- Add a new product category.
- Update an existing product category's name.
- Delete a product category from the system.
- Search by the category name

## Unit Of Measure Page

The Unit Of Measure page displays a list of all units of measure in the system. Users can perform the following actions:

- View all units of measure and their details, including the name, base unit of measure, and conversion factor.
- Add a new unit of measure.
- Update an existing unit of measure's details.
- Delete a unit of measure from the system.
- Search by the unit name

## POS Page

The POS page is designed for cashiers to manage customers' carts. It offers the following features:

1.  Initiate new cart checkouts and manage multiple carts simultaneously.
2.  Add descriptions to each cart for additional information.
3.  Add products to a cart by selecting from the available list.
4.  Change the quantity of added products.
5.  Remove products from the cart.
6.  Search by the product name and filter the list of products by category.
7.  Ability to handle multiple carts : The POS system supports managing multiple carts simultaneously. Each cart has its unique identifier and contains a set of products, quantities, Users can seamlessly switch between different carts to process multiple orders efficiently. Each cart has a checkout button to finalize the purchase.

# Technologies Used

Frontend: React.js, JavaScript, HTML, CSS

Backend: Node.js, json-server , axios

Database: json-server

# Code Overview :-

## Service API :-

The Service API file provides functions for making API requests to the backend server. It utilizes the Axios library for performing HTTP requests. The API functions are organized based on the different entities in the system, such as products, categories, units of measure, and carts. Here's a breakdown of the available API functions:

### Products

- `fetchProducts`: Fetches all products from the server.
- `fetchProductById`: Fetches a specific product by its ID.
- `addProduct`: Adds a new product to the system.
- `updateProduct`: Updates an existing product with new information.
- `deleteProduct`: Deletes a product from the system.

### Categories

- `fetchCategories`: Fetches all product categories from the server.
- `addCategory`: Adds a new product category to the system.
- `updateCategory`: Updates an existing product category with new information.
- `deleteCategory`: Deletes a product category from the system.

### Units of Measure

- `fetchUnits`: Fetches all units of measure from the server.
- `addUnit`: Adds a new unit of measure to the system.
- `updateUnit`: Updates an existing unit of measure with new information.
- `deleteUnit`: Deletes a unit of measure from the system.

### Carts

- `createCart`: Creates a new cart.
- `fetchCarts`: Fetches all carts from the server.
- `fetchCartById`: Fetches a specific cart by its ID.
- `addToCart`: Adds a product to a specific cart.
- `updateProductInCart`: Updates a product within a cart with new information.
- `removeFromCart`: Removes a product from a cart.
- `getCartWithProductDetails`: Fetches a cart with detailed information about its products.
- `deleteCart`: Deletes a cart from the system.

The Service API file serves as a communication layer between the frontend and the backend, allowing the application to perform CRUD operations on different entities.

## Authentication Code

The authentication code provided is responsible for checking the validity of a token stored in the local storage. Here's an explanation of the code:

### checkToken

The `checkToken` function is used to validate the token stored in the local storage. It performs the following steps:

1.  Retrieves the token data from the local storage using the key "token". If no token data is found, it returns `null` indicating that the user is not logged in.
2.  Extracts the token and expiry time from the token data.
3.  Compares the current time with the expiry time.
    - If the current time is greater than the expiry time, it means the token has expired. In this case, it removes the token from the local storage and returns `null`.
    - If the current time is less than or equal to the expiry time, it means the token is still valid. It returns the token.

Note that this code assumes the token is stored in the local storage using the key "token" and follows a specific format that includes an expiry time. The expiry time is compared with the current time to determine the token's validity.

You can use this `checkToken` function to validate the token before granting access to certain protected routes or performing authenticated actions in your application.

If you have a different authentication system or token structure, you may need to modify the code accordingly.

# Context files :-

## Products Context

The Products Context file provides a context and context provider for managing products in the application. It utilizes the React Context API to share product-related data and functions across different components. Here's an overview of the Products Context:

### ProductsContext

The `ProductsContext` is created using the `createContext` function from React. It serves as the container for the shared product-related data and functions.

### ProductsContextProvider

The `ProductsContextProvider` component is responsible for managing the state and handling the business logic related to products. It wraps its child components with the `ProductsContext.Provider` to make the product-related data and functions accessible to them.

#### State

The state within the `ProductsContextProvider` component includes the following variables:

- `products`: An array of products, initially set to an empty array.
- `loading`: A boolean flag to indicate whether the products are being fetched.

#### useEffect

The `useEffect` hook is used to fetch the products from the server when the component mounts. It calls the `getProducts` function, which updates the `products` state with the fetched data and sets the `loading` flag accordingly.

#### Functions

The `ProductsContextProvider` defines several functions for performing CRUD operations on products:

- `getProducts`: Fetches the products from the server and updates the `products` state.
- `addNewProduct`: Adds a new product to the system by making a POST request to the server. The response data is added to the `products` state.
- `updateExistingProduct`: Updates an existing product in the system by making a PUT request to the server. The response data is used to update the corresponding product in the `products` state.
- `deleteExistingProduct`: Deletes an existing product from the system by making a DELETE request to the server. The product is removed from the `products` state.
- `fetchProductById`: Fetches a specific product by its ID from the server.

#### Value Prop

The `ProductsContext.Provider` component wraps its child components and provides them with the product-related data and functions through the `value` prop. This allows the child components to access and utilize the shared data and functions.

To use the Products Context, import the `ProductsContextProvider` and wrap it around the relevant components in your application.

## Categories Context

The Categories Context file provides a context and context provider for managing product categories in the application. It utilizes the React Context API to share category-related data and functions across different components. Here's an overview of the Categories Context:

### CategoriesContext

The `CategoriesContext` is created using the `createContext` function from React. It serves as the container for the shared category-related data and functions.

### CategoriesContextProvider

The `CategoriesContextProvider` component is responsible for managing the state and handling the business logic related to categories. It wraps its child components with the `CategoriesContext.Provider` to make the category-related data and functions accessible to them.

#### State

The state within the `CategoriesContextProvider` component includes the following variables:

- `categories`: An array of categories, initially set to an empty array.
- `loading`: A boolean flag to indicate whether the categories are being fetched.

#### useEffect

The `useEffect` hook is used to fetch the categories from the server when the component mounts. It calls the `getCategories` function, which updates the `categories` state with the fetched data and sets the `loading` flag accordingly.

#### Functions

The `CategoriesContextProvider` defines several functions for performing CRUD operations on categories:

- `getCategories`: Fetches the categories from the server and updates the `categories` state.
- `addNewCategory`: Adds a new category to the system by making a POST request to the server. The response data is added to the `categories` state.
- `updateExistingCategory`: Updates an existing category in the system by making a PUT request to the server. The response data is used to update the corresponding category in the `categories` state.
- `deleteExistingCategory`: Deletes an existing category from the system by making a DELETE request to the server. The category is removed from the `categories` state.

#### Value Prop

The `CategoriesContext.Provider` component wraps its child components and provides them with the category-related data and functions through the `value` prop. This allows the child components to access and utilize the shared data and functions.

To use the Categories Context, import the `CategoriesContextProvider` and wrap it around the relevant components in your application.

## Units of Measure Context

The Units of Measure Context file provides a context and context provider for managing units of measure in the application. It utilizes the React Context API to share unit-related data and functions across different components. Here's an overview of the Units of Measure Context:

### UnitsOfMeasureContext

The `UnitsOfMeasureContext` is created using the `createContext` function from React. It serves as the container for the shared unit-related data and functions.

### UnitsOfMeasureContextProvider

The `UnitsOfMeasureContextProvider` component is responsible for managing the state and handling the business logic related to units of measure. It wraps its child components with the `UnitsOfMeasureContext.Provider` to make the unit-related data and functions accessible to them.

#### State

The state within the `UnitsOfMeasureContextProvider` component includes the following variables:

- `units`: An array of units of measure, initially set to an empty array.
- `loading`: A boolean flag to indicate whether the units of measure are being fetched.

#### useEffect

The `useEffect` hook is used to fetch the units of measure from the server when the component mounts. It calls the `getUnits` function, which updates the `units` state with the fetched data and sets the `loading` flag accordingly.

#### Functions

The `UnitsOfMeasureContextProvider` defines several functions for performing CRUD operations on units of measure:

- `getUnits`: Fetches the units of measure from the server and updates the `units` state.
- `addNewUnit`: Adds a new unit of measure to the system by making a POST request to the server. The response data is added to the `units` state.
- `updateExistingUnit`: Updates an existing unit of measure in the system by making a PUT request to the server. The response data is used to update the corresponding unit of measure in the `units` state.
- `deleteExistingUnit`: Deletes an existing unit of measure from the system by making a DELETE request to the server. The unit of measure is removed from the `units` state.

#### Value Prop

The `UnitsOfMeasureContext.Provider` component wraps its child components and provides them with the unit-related data and functions through the `value` prop. This allows the child components to access and utilize the shared data and functions.

To use the Units of Measure Context, import the `UnitsOfMeasureContextProvider` and wrap it around the relevant components in your application.

## Carts Context

The Carts Context file provides a context and context provider for managing carts in the application. It utilizes the React Context API to share cart-related data and functions across different components. Here's an overview of the Carts Context:

### CartsContext

The `CartsContext` is created using the `createContext` function from React. It serves as the container for the shared cart-related data and functions.

### CartsContextProvider

The `CartsContextProvider` component is responsible for managing the state and handling the business logic related to carts. It wraps its child components with the `CartsContext.Provider` to make the cart-related data and functions accessible to them.

#### State

The state within the `CartsContextProvider` component includes the following variables:

- `carts`: An array of carts, initially set to an empty array.
- `selectedCart`: The currently selected cart, initially set to `null`.

#### useEffect

The `useEffect` hook is used to fetch all carts from the server when the component mounts. It calls the `fetchAllCarts` function, which updates the `carts` state with the fetched data.

#### Functions

The `CartsContextProvider` defines several functions for performing operations on carts:

- `createNewCart`: Creates a new cart by making a POST request to the server with the cart details. The response data is added to the `carts` state.
- `selectCart`: Retrieves a specific cart by its ID from the server and sets it as the selected cart in the `selectedCart` state.
- `addProductToCart`: Adds a product to a cart by making a series of API requests. If the product is already in the cart, its quantity is increased. Otherwise, a new product entry is created. The `selectedCart` state is updated with the latest cart details.
- `updateCartProduct`: Updates the details of a product within a cart by making a PUT request to the server. The `selectedCart` state is updated with the latest cart details.
- `removeProductFromCart`: Removes a product from a cart by making a DELETE request to the server. The `selectedCart` state is updated with the latest cart details.
- `deleteCartById`: Deletes a cart by its ID from the server. The cart is removed from the `carts` state, and if the selected cart matches the deleted cart, the `selectedCart` state is reset to `null`.

#### Value Prop

The `CartsContext.Provider` component wraps its child components and provides them with the cart-related data and functions through the `value` prop. This allows the child components to access and utilize the shared data and functions.

To use the Carts Context, import the `CartsContextProvider` and wrap it around the relevant components in your application.

## User Context

The User Context file provides a context and context provider for managing user-related data in the application. It utilizes the React Context API to share user data and functions across different components. Here's an overview of the User Context:

### UserContext

The `UserContext` is created using the `createContext` function from React. It serves as the container for the shared user-related data and functions.

### UserContextProvider

The `UserContextProvider` component is responsible for managing the state related to the user and providing the necessary functions to update the user data. It wraps its child components with the `UserContext.Provider` to make the user-related data and functions accessible to them.

#### State

The state within the `UserContextProvider` component includes the following variable:

- `user`: The user data, initially set to `null`.

#### Functions

The `UserContextProvider` component provides the following function:

- `setUser`: A function that allows updating the `user` state with new user data. This function is used to set the user when a user logs in or to clear the user data when a user logs out.

#### Value Prop

The `UserContext.Provider` component wraps its child components and provides them with the user-related data and functions through the `value` prop. This allows the child components to access and utilize the shared user data and functions.

To use the User Context, import the `UserContextProvider` and wrap it around the relevant components in your application.

Please note that this implementation assumes that the user data is managed within the context and not fetched from an external source. If you have a different user authentication system in place, you may need to adjust the implementation accordingly.

# Contributors

#### Mohammad Shebli (@shebli91)

Please feel free to contribute by submitting bug reports, feature requests, or pull requests.

# Contact

For any inquiries or questions, please contact the Me at mhamadshebli@gmail.com.
