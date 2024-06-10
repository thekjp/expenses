# Project Title

Paymate

## Overview

The app is designed to make it easier splitting bills in a group. The target audience will be young travellers.

### Problem

When travelling with a group of friends, there are often group bills that are accumalated and are difficult to keep track of. Expenses App's aim is to make the process simplier and easier to share expenses.

### User Profile

- Young travelers:
  - looking to keep track of shared expenses with friends
  - wanting to split bills easily
  - needing to see their share of expenses clearly

### Features

MVP:

- As a user, I want to be able to see my expenses
- As a user, I want to be able to add an expense
- As a user, I want to be able to edit an expense
- As a user, I want to be able to delete an expense

Future Features:

- As a user, I want to create an account to managed my shared expenses.
- As a user, I want to log in to my account to managed shared expenses.
- As a user, I want to create groups for different trips or events.
- As a user, I want to add friends to my groups.
- As a logged in user, I want record expenses for each group.
- As a logged in user, I want to split expenses among group members.
- As a logged in user, I want to see the total expenses for each group.
- As a logged in user, I want to see the balance owed or due for each member in a group.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - sass
- Server libraries:
  - knex
  - express

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Login
- Dashboard
- Add expense
- Edit expense

sitemap image

### Mockups

#### Login Page

![](home.png)

#### HomePage

![](register.png)

#### Add group

![](login.png)

#### Edit Group

![](view-groups.png)

### Data

![](sql-diagram.png)

### Endpoints

**GET /expenses/your-expenses**

- Get all expenses for user

Response:

```
[
    {
        "expense_id": 9,
        "title": "dinner at joeys",
        "total_amount": "100.00",
        "date": "2024-06-06T07:00:00.000Z",
        "group_name": "Trip to Rio",
        "amount": "50.00"
    },
    {
        "expense_id": 10,
        "title": "dinner at joeys",
        "total_amount": "100.00",
        "date": "2024-06-06T07:00:00.000Z",
        "group_name": "Trip to Paris",
        "amount": "50.00"
    }
]
```

### Auth

- There will be no auth on the first sprint

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather sample data

  - collect sample expense data

- Create seeds with sample data

- Deploy projects

  - Deploy client and server projects so all commits will be reflected in production

- Feature: View homepage

  - Implement view homepage to display expenses
  - Create GET /expenses/your-expenses endpoint

- Feature: Add expense to user

  - Add form input to add expense
  - create POST /expenses/user endpoint

- Feature: Update expenses

  - Implement update group form
  - Create PUT /expenses/:id
    endpoint

- Feature: delete expense

  - implement a modal to delete an expense
  - create delete/expenses/:id endpoint

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Add authentication to the app
- Add a currency conversion API
- Add notification via a third party API (sending email notifications)
- Forgot password functionality
- Add photo upload for avatars
- Add search functionality
- Add categories to groups
- Add categories to expenses
- Add page not found
- Add group functionality
- Add member functionality
