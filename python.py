import os
from google.cloud import speech

def transcribe_youtube_video(video_url):
    # Set up Google Cloud credentials
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "path/to/service_account_key.json"
    
    # Create a Speech-to-Text client
    client = speech.SpeechClient()
    
    # Define the configuration for the video transcription
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=44100,
        language_code="en-US",
    )
    
    # Specify the URL of the YouTube video
    uri = "gs://your-bucket-name/" + video_url
    
    # Set the media URI source
    audio = speech.RecognitionAudio(uri=uri)
    
    # Start the transcription process
    operation = client.long_running_recognize(config=config, audio=audio)
    
    print("Transcription in progress...")
    
    # Wait for the operation to complete
    response = operation.result()
    
    # Retrieve the transcriptions
    transcript = ""
    for result in response.results:
        transcript += result.alternatives[0].transcript
    
    return transcript

# Example usage
video_url = "youtube_video_filename.wav"
transcription = transcribe_youtube_video(video_url)
print(transcription)
