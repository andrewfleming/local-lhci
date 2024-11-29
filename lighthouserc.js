module.exports = {
    ci: {
        wizard: {
            serverBaseUrl: "http://localhost:9001/",
            projectBaseBranch: "main"
        },
        server: {
            storage: {
                storageMethod: 'sql',
                sqlDialect: 'sqlite',
                sqlDatabasePath: './lhci-database.sqlite', // Use SQLite to track performance over time
            }
        },
        collect: {
            url: [
                'https://example.com/',
            ],
            numberOfRuns: 5,                  // Best practice: multiple runs for reliable data
            settings: {
                onlyCategories: ['performance'], // Focus only on the performance category
                disableStorageReset: true        // Ensure Lighthouse does not clear browser cache between runs
            },
            chromeFlags: '--no-sandbox --headless --disable-gpu --no-zygote --disable-dev-shm-usage',
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'http://localhost:9001',
            token: 'build-token-here' // build token from lhci wizard
        },
    },
};