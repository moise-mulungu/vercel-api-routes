{
    "rewrites"; [
        {
            "source": "/:path*",
            "has": [
                {
                    "type": "host",
                    "value": "https://vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app/"
                }
            ],
            "destination": "/api/:path*"
        }
    ]
}