# Quick test of Gemini API key
$apiKey = "AIzaSyBhBSYDfNu0zoeSTt6fhVry1JFGMsFU76Q"
$uri = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$apiKey"

$body = @{
    contents = @(
        @{
            role = "user"
            parts = @(@{ text = "Write a 2-sentence sales pitch for a smartphone" })
        }
    )
} | ConvertTo-Json -Depth 5

try {
    $res = Invoke-RestMethod -Method Post -Uri $uri -ContentType "application/json" -Body $body
    $pitch = $res.candidates[0].content.parts[0].text
    Write-Host "✅ SUCCESS! Generated pitch:" -ForegroundColor Green
    Write-Host $pitch -ForegroundColor White
} catch {
    Write-Host "❌ FAILED: $($_.Exception.Message)" -ForegroundColor Red
}
