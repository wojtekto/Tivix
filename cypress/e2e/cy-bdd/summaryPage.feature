Feature: Summary page verification

    Background:
        Given user is on the home page

    Scenario Outline: Alert message handling on summary page
        Given user select '<country>' for a pickup
        And user select '<city>' of the selected country
        And user provide car '<model>'
        And user provide '<pickup_date>' for a pickup
        And user provide '<dropoff_date>' for a dropoff
        And user submit search button
        And user submit rent in the table
        And user submit rent in car details page
        When user provide '<first_name>' in first name input
        And user provide '<last_name>' in last name input
        And user provide '<card_number>' in card number input
        And user provide '<email>' in email input
        And user submit "Rent" button
        Then alert with '<error_message>' is visible
        Examples:
            | country  | city    | model  | pickup_date | dropoff_date | first_name                                                    | last_name                                               | card_number           | email             | error_message                    |
            | France   | Paris   | Mazda  | 2023-10-20  | 2023-10-20   | AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       | Nowak                                                   | 1111222233334444      | a.nowak@gmail.com | Name value is too long           |
            | France   | Paris   | Mazda  | 2023-10-20  | 2023-10-20   | Adam                                                          | AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA | 1111222233334444      | a.nowak@gmail.com | Last name value is too long      |
            | France   | Paris   | Mazda  | 2023-10-20  | 2023-10-20   | Adam                                                          | Nowak                                                   | a                     | a.nowak@gmail.com | Card number contains wrong chars |
            | France   | Paris   | Mazda  | 2023-10-20  | 2023-10-20   | Adam                                                          | Nowak                                                   | 111122223333444455556 | a.nowak@gmail.com | Card number value is too long    |
            | France   | Paris   | Mazda  | 2023-10-20  | 2023-10-20   | Adam                                                          | Nowak                                                   | 1111222233334444      | a                 | Please provide valid email       |