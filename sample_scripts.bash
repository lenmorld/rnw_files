  curl -X "POST" -H "Authorization: Basic NmNhYTc4N2YzZWY4NGQ0M2I1ZDVhYmQ0ZWY4ZjUyMjg6MjRlYjI4MzFiNjI0NDM3OGI2ODliOTc4OGEyZjhkMDc=" -d grant_type=client_credentials https://accounts.spotify.com/api/token 
  
  {"access_token":".....","token_type":"Bearer","expires_in":3600,"scope":""}
  curl -H "Authorization: Bearer BQA1q8Oc0m0_znC7z2SeJRc8PtOl5aA-ppD8CCYkdxpFDNX1qnUSIsmAUk0Prxrg-aWfjCvRZtnMb3cs7YM" "https://api.spotify.com/v1/search?query=batman&type=track"
