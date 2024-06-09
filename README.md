# Project Title

Expenses App (Name TBA)

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

- Home page
- List groups
- View group details
- Register
- Login

### Mockups

#### Home Page

![](home.png)

#### Register Page

![](register.png)

#### Login Page

![](login.png)

#### View Groups Page

![](view-groups.png)

#### View Group Page

![](view-group.png)

### Data

![](sql-diagram.png)

### Endpoints

**GET /groups**

- Get all groups for a logged-in user

Response:

```
[
    {
        "id": 1,
        "name": "Trip to Paris",
        "created_at": "2024-05-21T15:30:00Z",
        "updated_at": "2024-05-21T15:30:00Z"
    },
    ...
]
```

**GET /groups/:id**

- Get groups by id

Parameters:

- id: groups id as number

Response:

```
{
    "id": 1,
    "name": "Trip to Paris",
    "created_at": "2024-05-21T15:30:00Z",
    "updated_at": "2024-05-21T15:30:00Z",
    "members": [
        {
            "id": 1,
            "username": "user1"
        },
        ...
    ],
    "expenses": [
        {
            "id": 1,
            "title": "Dinner",
            "total_amount": 100.00,
            "date": "2024-05-21",
            "items": [
                {
                    "user_id": 1,
                    "amount": 50.00
                },
                ...
            ]
        },
        ...
    ]
}
```

**POST /groups**

- create a new group

Parameters:

- group name (eg, "Trip to Paris")

Response:

```
{
    "id": 1,
    "name": "Trip to Paris",
    "created_at": "2024-05-21T15:30:00Z",
    "updated_at": "2024-05-21T15:30:00Z"
}
```

**POST /groups/members**

- add a member to a group

Parameters:

- user_id: user id as a number

Response:

```
{
    "id": 1,
    "user_id": 2,
    "group_id": 1,
    "role": "member"
}
```

**POST /groups/expenses**

- add an expense to a group

Parameters:

```
{
    "title": "Dinner",
    "total_amount": 100.00,
    "date": "2024-05-21",
    "items": [
        {
            "user_id": 1,
            "amount": 50.00
        },
        {
            "user_id": 2,
            "amount": 50.00
        }
    ]
}
```

Response:

```
{
    "id": 1,
    "group_id": 1,
    "title": "Dinner",
    "total_amount": 100.00,
    "date": "2024-05-21",
    "items": [
        {
            "user_id": 1,
            "amount": 50.00
        },
        {
            "user_id": 2,
            "amount": 50.00
        }
    ]
}
```

**PUT /groups/:id/**

- Logged in user can update group details

Parameters:

```
{
"id": "1",
"name": "Trip to London"
}
```

Response:

```
{
    "id": 1,
    "name": "Trip to London",
    "created_at": "2024-05-21T15:30:00Z",
    "updated_at": "2024-05-21T15:30:00Z"
}
```

**PUT /groups/expenses/:id**

- Logged in user can update expenses

Parameters:

```
{
    "title": "Brunch",
    "total_amount": 150.00,
    "date": "2024-05-22",
    "items": [
        {
            "user_id": 1,
            "amount": 75.00
        },
        {
            "user_id": 2,
            "amount": 75.00
        }
    ]
}
```

Response:

```
{
    "id": 1,
    "group_id": 1,
    "title": "Brunch",
    "total_amount": 150.00,
    "date": "2024-05-22",
    "items": [
        {
            "user_id": 1,
            "amount": 75.00
        },
        {
            "user_id": 2,
            "amount": 75.00
        }
    ]
}
```

**DELETE /groups/expenses/:id**

- delete an expense from a group

Parameters:

- group_id: group id in the form of a number

Response:

```
{
    "message": "Expense successfully deleted."
}
```

**DELETE /groups/:id**

- delete a group

Parameters:

- group_id: group id in the form of a number

Response:

```
{
    "message": "Group successfully deleted."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
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

  - collect sample groups and expense data

- Create seeds with sample data

- Deploy projects

  - Deploy client and server projects so all commits will be reflected in production

- Feature: List groups

  - Implement list groups page
  - Create GET /groups endpoint

- Feature: View group

  - Implement view group page
  - Create GET /groups/
    endpoint

- Feature: Add group

  - Add form input to add group

- Feature: Update group

  - Implement update group form
  - Create PUT /groups/
    endpoint

- Feature: Create account

  - Implement form to create account

- Feature: Add expense

  - Add form input to add expense

- Feature: Update expense

  - Implement update expense form
  - Create PUT /groups/
    /expenses/
    endpoint

- Feature: Delete expense

  - Implement delete expense functionality
  - Create DELETE /groups/
    /expenses/
    endpoint

- Feature: Home page

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

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
