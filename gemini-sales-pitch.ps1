# PowerShell script to generate sales pitches using Gemini API
# Usage: .\gemini-sales-pitch.ps1

param(
    [string]$Product = "Smartphone",
    [string]$TargetAudience = "tech enthusiasts",
    [int]$Length = 150
)

# Your Gemini API key
$apiKey = "AIzaSyBhBSYDfNu0zoeSTt6fhVry1JFGMsFU76Q"

# API endpoint
$uri = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$apiKey"

# Create the request body
$body = @{
    contents = @(
        @{
            role = "user"
            parts = @(
                @{
                    text = "Create a compelling sales pitch for a $Product targeting $TargetAudience. 
                    The pitch should be approximately $Length words and include:
                    - A strong hook/opening
                    - Key benefits and features
                    - Social proof or credibility
                    - Clear call-to-action
                    - Emotional appeal
                    
                    Make it persuasive and engaging. Focus on how this product solves a real problem for the target audience."
                }
            )
        }
    )
} | ConvertTo-Json -Depth 5

# Headers
$headers = @{
    "Content-Type" = "application/json"
}

Write-Host "🚀 Generating sales pitch for: $Product" -ForegroundColor Green
Write-Host "🎯 Target audience: $TargetAudience" -ForegroundColor Cyan
Write-Host "📏 Target length: $Length words" -ForegroundColor Yellow
Write-Host ""

try {
    # Make the API call
    Write-Host "📡 Calling Gemini API..." -ForegroundColor Blue
    $response = Invoke-RestMethod -Method Post -Uri $uri -Body $body -Headers $headers
    
    # Extract the generated text
    $salesPitch = $response.candidates[0].content.parts[0].text
    
    if ($salesPitch) {
        Write-Host "✅ Sales Pitch Generated Successfully!" -ForegroundColor Green
        Write-Host "=" * 60 -ForegroundColor Gray
        Write-Host ""
        Write-Host $salesPitch -ForegroundColor White
        Write-Host ""
        Write-Host "=" * 60 -ForegroundColor Gray
        
        # Save to file
        $timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
        $filename = "sales-pitch-$Product-$timestamp.txt"
        $salesPitch | Out-File -FilePath $filename -Encoding UTF8
        Write-Host "💾 Saved to: $filename" -ForegroundColor Green
    } else {
        Write-Host "❌ No content generated" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ Error occurred:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response body: $responseBody" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "💡 Usage examples:" -ForegroundColor Yellow
Write-Host "  .\gemini-sales-pitch.ps1 -Product 'Electric Car' -TargetAudience 'environmentalists' -Length 200"
Write-Host "  .\gemini-sales-pitch.ps1 -Product 'Fitness App' -TargetAudience 'busy professionals' -Length 100"
