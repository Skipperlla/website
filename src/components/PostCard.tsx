import React from "react";

const PostCard = () => {
  return <div className="mt-6">PostCard</div>;
};

export default PostCard;

// https://accounts.spotify.com/authorize?client_id=a6944c496b7a45048e9a0e5c0a053d1b&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing%20user-top-read

// http://localhost:3000/callback?code=AQAeNbFl0vlqRmpk3ZrSdWDSS4iTn18Z9XQa5jW1HfNESl7JFmleVY8fkHYrewvOO2pLe7UijjQYm5P56eh9LeuMAouRJCQ_IBbTxBhwxwADIRFzCIVEkQU-4gJ8RN6C2BKMBLBFyjjXoYgkHnObwpk9aWRvTO__slKTUpJogHkxglry1lS4tSY4cdVr7duOEdDZKQ88DXVVR8s33YO7Gw_1LhyD

// curl -H "Authorization: Basic NGE4ZjA4N2UwODJhNDRlYmJiMmUxMGFiMzJmMWZmODY6Yzc4Mjg1ZmU1MTkxNDgwNzg1YTAwMDUxNTFjOGYyMGQ=" -d grant_type=authorization_code -d code=AQAeNbFl0vlqRmpk3ZrSdWDSS4iTn18Z9XQa5jW1HfNESl7JFmleVY8fkHYrewvOO2pLe7UijjQYm5P56eh9LeuMAouRJCQ_IBbTxBhwxwADIRFzCIVEkQU-4gJ8RN6C2BKMBLBFyjjXoYgkHnObwpk9aWRvTO__slKTUpJogHkxglry1lS4tSY4cdVr7duOEdDZKQ88DXVVR8s33YO7Gw_1LhyD -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
