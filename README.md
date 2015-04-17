# ABCNewsCategories

## Endpoints

```[POST] /user.json```
Creates a new user, returns an authentication token that must be supplied for all other requests as an ```HTTP_AUTHORIZATION``` header. Google "http token authentication"

```[GET] /current_user.json```
Returns the current user based on the token passed in. In the future this endpoint will return the model of the user (e.g. what topics, entities they're interested in based on what stories they've liked in past)

```[GET] /stories.json?limit=x&page=y```
Fetch stories in the system. [limit] will return x number of stories, [page] will offset using the limit. Stories are automatically ordered from newest to oldest.

```[POST] /stories/n/interest.json```
Will register a users interest in a story. Must be passed an 'interest' field in the body between 0.0 and 1.0 - 0.0 being totally disinterested in the story, 1.0 being totally interested in the story. 0.5 indicates ambivalence about the story.
