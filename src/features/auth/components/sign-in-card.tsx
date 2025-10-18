
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import DottedSeparator from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { FcGoogle} from "react-icons/fc";
import { FaGithub} from "react-icons/fa";

const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <DottedSeparator/>
            
            <CardContent className="p-7">
    <form className="space-y-4">
        <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
            // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
                <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
            // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button disabled={false} size="lg" className="w-full">Login</Button>
    </form>
</CardContent>
<div className="px-7">
    <DottedSeparator />
</div>
<CardContent className="p-7 flex flex-col gap-y-4">
    <Button
        disabled={false}
        variant="secondary"
        size="lg"
        className="w-full"
    >
        <FcGoogle className="mr-2 size-5"/>
        Login with Google
    </Button>
    <Button
        disabled={false}
        variant="secondary"
        size="lg"
        className="w-full"
    >
        <FaGithub className="mr-2 size-5"/>
        Login with GitHub
    </Button>
</CardContent>
        </Card>
    );
};

export default SignInCard;

