
import SubscribeForm from '../components/subscribeform/SubscribeForm';

export default function NewsLetterSubscriptionForm() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl text-gray-500">
            Receive our Newsletter with Latest Hot Deals, complete the form
            below
          </h1>
        </div>

        {/* # Add the form here */}

        <div className="mb-36 pb-96">
      <SubscribeForm />
      </div>
      </main>
    );
  }