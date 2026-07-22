import { Field } from "@base-ui/react/field";
import * as React from "react";

import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof Field.Label>>(
  ({ className, ...props }, ref) => (
    <Field.Label
      ref={ref}
      className={cn(
        "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
