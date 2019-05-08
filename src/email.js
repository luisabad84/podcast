
handleSubmit (event) {
    event.preventDefault()

    const {
    REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env

    this.sendFeedback(
    template,
    this.props.senderEmail,
    receiverEmail,
    this.state.feedback)

    this.setState({
    formSubmitted: true
    })
}

sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs.send(
    'mail',
    templateId,
    {
        senderEmail,
        receiverEmail,
        feedback
    })
    .then(res => {
        this.setState({ formEmailSent: true })
    })
      // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Failed to send feedback. Error: ', err))
}