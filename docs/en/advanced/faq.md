# Known Issues and FAQ

This page summarizes common issues and solutions encountered while using Spotoolfy.

## Known Issues

### Current Version Known Issues

#### Audio Playback Related 🎵

**Issue**: Some songs experience brief stuttering during playback
- **Affected Versions**: v2.1.0 - v2.1.2
- **Severity**: Medium
- **Temporary Solution**:
  - Lower audio quality to "Standard"
  - Clear app cache and restart
- **Expected Fix**: v2.2.0 (expected April 2024 release)

**Issue**: iOS devices occasionally auto-pause background playback
- **Affected Versions**: All iOS versions
- **Severity**: Medium
- **Cause**: iOS system background task limitations
- **Solution**:
  1. Enable "Background App Refresh" in system settings
  2. Add Spotoolfy to Siri Shortcuts
- **Status**: Continuous optimization in progress

#### Lyrics Feature Related 📝

**Issue**: Some Chinese songs have inaccurate lyrics synchronization
- **Affected Versions**: All versions
- **Severity**: Minor
- **Cause**: Lyrics source data quality issues
- **Temporary Solution**:
  - Manually adjust lyrics time offset
  - Use "Report Lyrics Issue" feature
- **Status**: Improving lyrics data sources

**Issue**: Translation feature has response delays on slower networks
- **Affected Versions**: All versions
- **Severity**: Minor
- **Solution**:
  - Enable translation cache feature
  - Use "Quick Translation" mode
- **Improvement Plan**: v2.3.0 will add offline translation feature

## Frequently Asked Questions

### Installation and Configuration 🛠️

#### Q: How to solve "App installation failed" problem?
**A**: Please troubleshoot with the following steps:
1. **Check storage space**: Ensure device has at least 200MB available space
2. **Check system version**:
   - Android: 6.0 (API 23) or higher
   - iOS: 12.0 or higher
3. **Clear download cache**: Delete previously downloaded installation packages
4. **Restart device**: Restart and try installing again
5. **Check permissions**: Allow "Unknown sources" installation (Android)

#### Q: First-time Spotify account login shows "Authorization failed"?
**A**: Possible causes and solutions:
- **Network issues**: Check network connection, try using Wi-Fi
- **Account status**: Confirm Spotify account status is normal
- **Browser issues**: Clear browser cache or use another browser
- **Proxy settings**: If using proxy, ensure proxy settings are correct

### Playback and Audio Quality 🎵

#### Q: Why can't some songs be played?
**A**: Possible reasons:
- **Regional restrictions**: Song not available in your region
- **Copyright issues**: Song temporarily removed or copyright expired
- **Network issues**: Unstable network connection
- **Account limitations**: Spotify free account playback restrictions

**Solutions**:
- Check if song is playable in official Spotify app
- Try playing other songs to test network
- Contact Spotify customer service about regional restrictions

#### Q: How to improve music playback quality?
**A**: Optimization suggestions:
1. **Upgrade to Spotify Premium**: Unlock 320kbps high quality
2. **Network optimization**:
   - Use stable Wi-Fi connection
   - Avoid peak network hours
3. **Device optimization**:
   - Use high-quality headphones or speakers
   - Close other network-consuming apps
4. **App settings**:
   - Enable "Volume Leveling"
   - Adjust equalizer settings

### Lyrics and Translation 📝

#### Q: What to do if lyrics display inaccurately or out of sync?
**A**: Solutions:
1. **Manual correction**:
   - Enter lyrics page
   - Click settings icon
   - Adjust time offset
2. **Report issues**:
   - Use "Report Lyrics Issue" feature
   - Provide accurate lyrics information
3. **Switch lyrics source**:
   - Try other lyrics sources in lyrics settings
   - Wait for community contributions of more accurate lyrics

#### Q: What to do if AI translation results are inaccurate?
**A**: Improvement suggestions:
1. **Switch translation engine**:
   - Try "Precision Engine" or "Literary Engine"
   - Different engines suit different song types
2. **Provide feedback**:
   - Use "Translation Feedback" feature
   - Help improve translation quality
3. **Manual editing**:
   - Long press translation text
   - Add personal translation or notes

## Getting Help

### Official Support Channels
- **Technical Support Email**: support@spotoolfy.com
- **Discord Community**: [discord.gg/spotoolfy](https://discord.gg/spotoolfy)
- **GitHub Issues**: [github.com/spotoolfy/spotoolfy/issues](https://github.com/spotoolfy/spotoolfy/issues)

### When Submitting Issues, Please Include
1. **Device Information**: OS version, device model
2. **App Version**: Spotoolfy version number
3. **Issue Description**: Detailed problem reproduction steps
4. **Error Screenshots**: If interface issues, please attach screenshots
5. **Log Information**: If possible, provide error logs

---

If your issue is not listed above, please contact us through official support channels, and we'll resolve it as soon as possible!