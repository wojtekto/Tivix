Feature: Search for car to rent

    Background:
        Given user is on the home page
    
    Scenario Outline: User gets table with available cars
        Given user select '<country>' for a pickup
        And user select '<city>' of the selected country
        And user provide car '<model>'
        And user provide '<pickup_date>' for a pickup
        And user provide '<dropoff_date>' for a dropoff
        When user submit search button
        Then table with search results is visible
        And provided car '<model>' is on the list if available
        Examples:
            | country  | city    | model  | pickup_date | dropoff_date |
            | France   | Paris   | Toyota | 2023-10-20  | 2023-10-20   |
            | Poland   | Wroclaw | Skoda  | 2023-10-17  | 2023-10-28   |

    Scenario Outline: User cannot select dropoff date earlier than pickup
        Given user provide '<pickup_date>' for a pickup
        And user provide '<dropoff_date>' for a dropoff 
        When user submit search button
        Then alert "Please enter a valid date!" should come up
        Examples:
            | pickup_date | dropoff_date |
            | 2023-10-21  | 2023-10-20   |
            | 2023-10-17  | 2021-10-21   |