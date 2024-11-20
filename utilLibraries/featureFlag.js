const FEATURE_FLAG = {
  PRODUCT: true,
  ANALYTICS: true,
  FAVOURITES: [{ userRoles: ["admin", "tester"] }],
  SUGGESTIONS: [{ userRoles: ["tester"] }],
};

function fetchFeatureFlags(featureName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (FEATURE_FLAG[featureName] !== undefined) {
        return resolve(FEATURE_FLAG[featureName]);
      } else {
        return resolve(false);
      }
    }, 200);
  });
}

function getUser() {
  return {
    id: "12",
    name: "ak",
    role: "tester",
  };
}

function checkAccessUserRoles(userRoles) {
  if (userRoles.includes(getUser().role)) {
    return true;
  } else {
    return false;
  }
}

function getFeatureFlag() {
  const cache = {};
  const pendingRequest = {};
  return function (featureName) {
    if (cache[featureName]) {
      return Promise.resolve(cache[featureName]);
    }
    if (pendingRequest[featureName]) {
      console.log("Picked from pending Promise");
      return pendingRequest[featureName];
    }
    const promise = new Promise((resolve, reject) => {
      console.log("MAKING API CALL !!!");
      fetchFeatureFlags(featureName)
        .then((featureConfig) => {
          if (typeof featureConfig === "boolean") {
            cache[featureName] = featureConfig;
            resolve(featureConfig);
            return;
          } else {
            for (let config of featureConfig) {
              if (config.userRoles !== undefined) {
                const userHasAccessRoles = checkAccessUserRoles(
                  config.userRoles
                );
                cache[featureName] = userHasAccessRoles;
                resolve(userHasAccessRoles);
                return;
              }
            }
          }
        })
        .catch((err) => {
          console.error(err);
          resolve(false);
        })
        .finally(() => {
          delete pendingRequest[featureName];
        });
    });

    pendingRequest[featureName] = promise;
    return promise;
  };
}

const getFeatureFlagConfig = getFeatureFlag();

getFeatureFlagConfig("SUGGESTIONS").then((config) => {
  console.log(config);
});

getFeatureFlagConfig("SUGGESTIONS").then((config) => {
  console.log(config);
});
