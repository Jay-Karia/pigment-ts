import {Button,ButtonProps} from "@/components/ui/button";

interface IProps extends ButtonProps {
  loading: boolean;
}

export function LoadingButton(props: IProps) {
  const { loading, ...rest } = props;
  return (
    <div className="inline-block">
      <Button
        {...rest}
        disabled={loading}
        className={`relative flex items-center justify-center w-full ${loading ? 'cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <div className="w-full">
            <svg
              className="animate-spin mx-[5px] text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          props.children
        )}
      </Button>
    </div>
  );
}