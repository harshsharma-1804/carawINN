const cnonf = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteRideCollectionId: String(import.meta.env.VITE_APPWRITE_RIDECOLLECTIONS_ID),
    appwriteUserCollectionId: String(import.meta.env.VITE_APPWRITE_RIDECOLLECTIONS_ID),
    appwriteFleetCollectionId: String(import.meta.env.VITE_APPWRITE_RIDECOLLECTIONS_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conv