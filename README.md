# COSC2626-A1 - s3873756

### Description
Flixily allows users to recommend movies to each other and users can approve/reject recommendations. A list of mutually approved suggestions is curated, streamlining the process of choosing something to watch together.

### Limitations
As the focus for this implementation was on using AWS services and not on software development, the features are limited. There is no option to sign up, one of the pre-created accounts below must be used. Recommendations cannot be updated or deleted (unless the party it is recommended to rejects the recommendation). The same movie can be recommended twice to the same user. Current user is stored in local storage and passwords are stored in plaintext, so the security has not been optimised (instead I had focused on implementing the AWS services)/

### User credentials
Usernames:
- sidi
- alex
- MovieLover
- rachel

Password for all ccounts is 'hi'

### Run instructions
cd react
cd flixily
npm install
npm start

Public URL: http://54.164.208.36/

